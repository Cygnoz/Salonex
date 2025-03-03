const Organization = require("../database/model/organization");
const Settings = require("../database/model/settings");
const Service = require('../database/model/service');
const Item = require('../database/model/item')
const { cleanData } = require("../services/cleanData");

const dataExist = async (organizationId) => {
  const [organizationExists, settingsExist, services] = await Promise.all([
    Organization.findOne({ organizationId }),
    Settings.findOne({ organizationId }),
    Service.find({ organizationId })
      .populate('category', 'categoryName')
      .populate('product.itemId', 'itemName sellingPrice igst weight weightUnit') // Added fields
      .lean(),
  ]);
  return { organizationExists, settingsExist, services };
};


// Updated calculation function with IGST logic
const calculateServiceAmount = (serviceData, itemsData) => {
  let totalAmount = 0;
  serviceData.product.forEach((product) => {
    const matchedItem = itemsData.find(item => item._id.equals(product.itemId));
    if (matchedItem) {
      const { weight = 100, sellingPrice = 0, igst = 0 } = matchedItem;
      const basePrice = ((product.quantity / weight) * sellingPrice) || 0;
      const igstAmount = (basePrice * (igst / 100)) || 0; 
      product.amount = parseFloat((basePrice + igstAmount).toFixed(2)); 
      totalAmount += product.amount;
    } else {
      product.amount = 0;
    }
  });
  return parseFloat(totalAmount.toFixed(2));
};



// Updated addService controller
exports.addService = async (req, res) => {
  console.log("Add Service:", req.body);
  try {
    const cleanedData = cleanData(req.body);
    const organizationId = req.user.organizationId;
    const { serviceName } = cleanedData;

    const { organizationExists, settingsExist } = await dataExist(organizationId);
    if (!organizationExists || !settingsExist) {
      return res.status(404).json({ message: "Organization or settings not found" });
    }

    if (!validateServiceData(cleanedData, res)) return;
    if (await isDuplicateName(serviceName, organizationId, res)) return;

    // Fetch item details
    const itemsData = await Item.find({
      _id: { $in: cleanedData.product.map((p) => p.itemId) },
    }).lean();

    const totalAmount = calculateServiceAmount(cleanedData, itemsData);
    cleanedData.price = totalAmount;

    const newService = new Service({
      ...cleanedData,
      organizationId,
    });

    await newService.save();
    res.status(201).json({ message: "Service created successfully.", newService });
  } catch (error) {
    console.error("Error creating service:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};



// Edit Service
exports.editService = async (req, res) => {
  console.log("Edit Service:", req.body);
  try {
    const { serviceId } = req.params;

    const cleanedData = cleanData(req.body);

    const organizationId = req.user.organizationId;

    const { serviceName } = cleanedData;

    const { organizationExists, settingsExist } = await dataExist(organizationId, serviceId);

    if (!organizationExists || !settingsExist) {
      return res.status(404).json({ message: "Organization or settings not found" });
    }

    // Validate inputs
    if (!validateServiceData(cleanedData, res)) return;

    if (await isDuplicateNameExist(serviceName, organizationId, serviceId, res)) return;

    const updatedService = await Service.findByIdAndUpdate(serviceId, cleanedData, { new: true });
    if (!updatedService) return res.status(404).json({ message: "Service not found." });

    res.status(200).json({ message: "Service updated successfully.", service: updatedService });
  } catch (error) {
    console.error("Error updating service:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};



exports.getAllServices = async (req, res) => {
  try {
    const organizationId = req.user.organizationId;

    const { organizationExists, services } = await dataExist(organizationId);

    if (!organizationExists) {
      return res.status(404).json({ message: "No Organization Found." });
    }

    if (!services || services.length === 0) {
      return res.status(404).json({ message: "No Service Found." });
    }

    res.status(200).json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};


// Get One Service
exports.getService = async (req, res) => {
  try {
    const { serviceId } = req.params;

    const organizationId = req.user.organizationId;

    const { organizationExists, service } = await dataExist(organizationId, serviceId);

    if (!organizationExists) return res.status(404).json({ message: "No Organization Found." });
    if (!service) return res.status(404).json({ message: "Service not found." });

    res.status(200).json(service);
  } catch (error) {
    console.error("Error fetching service:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Delete Service
exports.deleteService = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const deletedService = await Service.findByIdAndDelete(serviceId);
    if (!deletedService) return res.status(404).json({ message: "Service not found." });
    res.status(200).json({ message: "Service deleted successfully." });
  } catch (error) {
    console.error("Error deleting service:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Check for duplicate item name - ADD
const isDuplicateName = async (serviceName, organizationId, res) => {
  const existingServiceName = await Service.findOne({ serviceName, organizationId });
  if (existingServiceName) {
    console.error("Service with this name already exists.");
    res.status(400).json({ message: "Service with this name already exists" });
    return true;
  }
  return false;
};

// Check for duplicate item name - EDIT
const isDuplicateNameExist = async (serviceName, organizationId, itemId, res) => {
  const existingServiceName = await Service.findOne({
    serviceName,
    organizationId,
    _id: { $ne: itemId }
  });

  if (existingServiceName) {
    console.error("Service with this name already exists.");
    res.status(400).json({ message: "Service with this name already exists" });
    return true;
  }

  return false;
};


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


// Validate Service Data
function validateServiceData(data, res) {
  const errors = [];
  
  validateReqFields(data, errors);

  if (errors.length > 0) {
    res.status(400).json({ message: errors.join(", ") });
    return false;
  }
  return true;
}

// Validate Required Fields
function validateReqFields(data, errors) {
  validateField(typeof data.serviceName === 'undefined', "Service name is required.", errors);
}

// Field validation utility
function validateField(condition, errorMsg, errors) {
  if (condition) {
    console.log(errorMsg);
    errors.push(errorMsg);
  }
}



// Calculation Function with IGST and Quantity Logic
// const calculateServiceAmount = (serviceData, itemsData) => {
//   let totalAmount = 0;
//   serviceData.product.forEach((product) => {
//     const matchedItem = itemsData.find(item => item._id.equals(product.itemId));
//     if (matchedItem) {
//       const itemPrice = Number(matchedItem.sellingPrice) || 0;
//       product.amount = product.quantity * itemPrice;
//       totalAmount += product.amount;
//     } else {
//       product.amount = 0; // Default to 0 if item not found
//     }
//   });
//   return totalAmount;
// };