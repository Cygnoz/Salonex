const Package = require("../database/model/package"); // Adjust the path as needed
const Organization = require("../database/model/organization");
const Settings = require("../database/model/settings");
const Service = require("../database/model/service");
const { cleanData } = require("../services/cleanData");

// Check if organization, settings, and services exist
const dataExist = async (organizationId) => {
  const [organizationExists, settingsExist, packages] = await Promise.all([
    Organization.findOne({ organizationId }),
    Settings.findOne({ organizationId }),
    Package.find({ organizationId }).lean(),
  ]);
  return { organizationExists, settingsExist, packages };
};

// Check for duplicate package name - ADD
const isDuplicatePackageName = async (packageName, organizationId, res) => {
  const existingPackage = await Package.findOne({ packageName, organizationId });
  if (existingPackage) {
    res.status(400).json({ message: "Package with this name already exists" });
    return true;
  }
  return false;
};

// Check for duplicate package name - EDIT
const isDuplicatePackageNameExist = async (packageName, organizationId, packageId, res) => {
  const existingPackage = await Package.findOne({
    packageName,
    organizationId,
    _id: { $ne: packageId }
  });

  if (existingPackage) {
    res.status(400).json({ message: "Package with this name already exists" });
    return true;
  }
  return false;
};

// Validate Package Data
function validatePackageData(data, res) {
  const errors = [];
  validateField(typeof data.packageName === 'undefined', "Package name is required.", errors);
  validateField(!Array.isArray(data.services) || data.services.length === 0, "At least one service is required.", errors);

  if (errors.length > 0) {
    res.status(400).json({ message: errors.join(", ") });
    return false;
  }
  return true;
}

// Utility for field validation
function validateField(condition, errorMsg, errors) {
  if (condition) errors.push(errorMsg);
}


function validateOrganizationTaxCurrency(organizationExists, taxExists, itemId, res) {
    if (!organizationExists) {
      res.status(404).json({ message: "Organization not found" });
      return false;
    }
    // if (!taxExists) {
    //   res.status(404).json({ message: "Tax not found" });
    //   return false;
    // }
    // if (!itemId) {
    //   res.status(404).json({ message: "Currency not found" });
    //   return false;
    // }
    // if (!settingsExist) {
    //   res.status(404).json({ message: "Settings not found" });
    //   return false;
    // }
    return true;
  }
  

//  Add Package
exports.addPackage = async (req, res) => {
  try {
    const cleanedData = cleanData(req.body);
    const organizationId = req.user.organizationId;
    const { packageName } = cleanedData;

    const { organizationExists, settingsExist } = await dataExist(organizationId);
    
    if (!organizationExists || !settingsExist) {
      return res.status(404).json({ message: "Organization or settings not found" });
    }

    if (!validateOrganizationTaxCurrency(organizationExists, null, res)) return;
    if (!validatePackageData(cleanedData, res)) return;
    if (await isDuplicatePackageName(packageName, organizationId, res)) return;

    const newPackage = new Package({
      ...cleanedData,
      organizationId,
    });

    await newPackage.save();
    res.status(201).json({ message: "Package created successfully." });
  } catch (error) {
    console.error("Error creating package:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

//  Edit Package
exports.editPackage = async (req, res) => {
  try {
    const { packageId } = req.params;
    const cleanedData = cleanData(req.body);
    const organizationId = req.user.organizationId;
    const { packageName } = cleanedData;

    const { organizationExists } = await dataExist(organizationId);
    if (!organizationExists) {
      return res.status(404).json({ message: "Organization not found" });
    }

    if (!validatePackageData(cleanedData, res)) return;
    if (await isDuplicatePackageNameExist(packageName, organizationId, packageId, res)) return;

    const updatedPackage = await Package.findByIdAndUpdate(packageId, cleanedData, { new: true });
    if (!updatedPackage) return res.status(404).json({ message: "Package not found." });

    res.status(200).json({ message: "Package updated successfully.", package: updatedPackage });
  } catch (error) {
    console.error("Error updating package:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

//  Delete Package
exports.deletePackage = async (req, res) => {
  try {
    const { packageId } = req.params;
    const deletedPackage = await Package.findByIdAndDelete(packageId);
    if (!deletedPackage) return res.status(404).json({ message: "Package not found." });
    res.status(200).json({ message: "Package deleted successfully." });
  } catch (error) {
    console.error("Error deleting package:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

//  Get One Package
exports.getPackage = async (req, res) => {
  try {
    const { packageId } = req.params;
    const organizationId = req.user.organizationId;

    const { organizationExists } = await dataExist(organizationId);
    if (!organizationExists) return res.status(404).json({ message: "No Organization Found." });

    const packageData = await Package.findById(packageId).populate("services.service", "serviceName");
    if (!packageData) return res.status(404).json({ message: "Package not found." });

    res.status(200).json(packageData);
  } catch (error) {
    console.error("Error fetching package:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

//  Get All Packages
exports.getAllPackages = async (req, res) => {
  try {
    const organizationId = req.user.organizationId;

    const { organizationExists } = await dataExist(organizationId);
    if (!organizationExists) return res.status(404).json({ message: "No Organization Found." });

    const packages = await Package.find({ organizationId }).populate("services.service", "serviceName");
    if (!packages || packages.length === 0) {
      return res.status(404).json({ message: "No Packages Found." });
    }

    res.status(200).json(packages);
  } catch (error) {
    console.error("Error fetching packages:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
