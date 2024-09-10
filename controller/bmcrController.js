const BMCR = require('../database/model/bmcr');
const Organization = require('../database/model/organization');
const Item = require("../database/model/item"); 


exports.addBmcr = async (req, res) => {
    console.log("Add BMCR:", req.body);

    const {
        type, // This indicates whether it's a brand, manufacturer, category, or rack
        organizationId,
        name,
        description,
    } = req.body;

    if (!['brand', 'manufacturer', 'category', 'rack'].includes(type)) {
        return res.status(400).json({ message: "Invalid type provided." });
    }

    try {
        // Check if an Organization exists
        const existingOrganization = await Organization.findOne({ organizationId });

        if (!existingOrganization) {
            return res.status(404).json({
                message: "No Organization Found.",
            });
        }

        let existingEntity, newEntity, fieldName;

        // Determine the type and set the appropriate field and query
        switch (type) {
            case 'brand':
                fieldName = 'brands';
                existingEntity = await BMCR.findOne({ organizationId, 'brands.brandName': name });
                newEntity = { brandName: name, description };
                break;
            case 'manufacturer':
                fieldName = 'manufacturers';
                existingEntity = await BMCR.findOne({ organizationId, 'manufacturers.manufacturerName': name });
                newEntity = { manufacturerName: name, description };
                break;
            case 'category':
                fieldName = 'categories';
                existingEntity = await BMCR.findOne({ organizationId, 'categories.categoriesName': name });
                newEntity = { categoriesName: name, description };
                break;
            case 'rack':
                fieldName = 'racks';
                existingEntity = await BMCR.findOne({ organizationId, 'racks.rackName': name });
                newEntity = { rackName: name, description };
                break;
            default:
                return res.status(400).json({ message: "Invalid type provided." });
        }

        // Check if the entity already exists
        if (existingEntity) {
            return res.status(409).json({
                message: `A ${type} with this name already exists in the given organization.`,
            });
        }

        // Add the new entity to the corresponding field
        const update = {
            $push: { [fieldName]: newEntity }
        };

        // Use upsert to create a new document if it does not exist
        await BMCR.updateOne({ organizationId }, update, { upsert: true });

        res.status(201).json(`${type.charAt(0).toUpperCase() + type.slice(1)} added successfully.`);
    } catch (error) {
        console.error(`Error adding ${type}:`, error);
        res.status(400).json({ error: error.message });
    }
};


// Get all data by organizationId and type
exports.getAllBmcr = async (req, res) => {
    const { organizationId, type } = req.body;

    try {
        // Check if an Organization exists
        const existingOrganization = await Organization.findOne({ organizationId });

        if (!existingOrganization) {
            return res.status(404).json({
                message: "No Organization Found.",
            });
        }

        // Fetch the BMCR document for the given organizationId
        const bmcrData = await BMCR.findOne({ organizationId });

        if (!bmcrData) {
            return res.status(404).json({
                message: "No data found for the provided organizationId.",
            });
        }

        // Prepare the response object based on the type
        let response;
        switch (type) {
            case 'brand':
                response = { brands: bmcrData.brands || [] };
                break;
            case 'manufacturer':
                response = { manufacturers: bmcrData.manufacturers || [] };
                break;
            case 'category':
                response = { categories: bmcrData.categories || [] };
                break;
            case 'rack':
                response = { racks: bmcrData.racks || [] };
                break;
            default:
                return res.status(400).json({
                    message: "Invalid type provided.",
                });
        }

        res.status(200).json(response);
    } catch (error) {
        console.error("Error fetching BMCR data:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};



// Get a single BMCR entity (brand, manufacturer, category, rack) by ID and type
exports.getABmcr = async (req, res) => {
    const { id } = req.params; // Entity ID (e.g., brandId, manufacturerId, etc.)
    const { organizationId, type } = req.body;

    try {
        // Check if the Organization exists
        const existingOrganization = await Organization.findOne({ organizationId });

        if (!existingOrganization) {
            return res.status(404).json({
                message: "No Organization Found.",
            });
        }

        // Fetch the BMCR document for the given organizationId
        const bmcrData = await BMCR.findOne({ organizationId });

        if (!bmcrData) {
            return res.status(404).json({
                message: "No data found for the provided organizationId.",
            });
        }

        // Find the specific entity by type and ID
        let entity;
        switch (type) {
            case 'brand':
                entity = bmcrData.brands.find(i => i._id.toString() === id);
                break;
            case 'manufacturer':
                entity = bmcrData.manufacturers.find(i => i._id.toString() === id);
                break;
            case 'category':
                entity = bmcrData.categories.find(i => i._id.toString() === id);
                break;
            case 'rack':
                entity = bmcrData.racks.find(i => i._id.toString() === id);
                break;
            default:
                return res.status(400).json({
                    message: "Invalid type provided.",
                });
        }

        // Check if the entity was found
        if (!entity) {
            return res.status(404).json({
                message: `${type.charAt(0).toUpperCase() + type.slice(1)} not found.`,
            });
        }

        // Return the entity
        res.status(200).json(entity);
    } catch (error) {
        console.error(`Error fetching ${type}:`, error);
        res.status(500).json({ message: "Internal server error." });
    }
};



//update bmcr
exports.updateBmcr = async (req, res) => {
    console.log("Received request to update BMCR entity:", req.body);

    try {
        const { _id, organizationId, type, name, description } = req.body;

        // Validate the type
        const validTypes = ['brand', 'manufacturer', 'category', 'rack'];
        if (!validTypes.includes(type)) {
            return res.status(400).json({ message: "Invalid type provided." });
        }

        // Check if an Organization already exists
        const existingOrganization = await Organization.findOne({ organizationId });
        if (!existingOrganization) {
            return res.status(404).json({ message: "No Organization Found." });
        }

        // Find the BMCR document
        const bmcrDoc = await BMCR.findOne({ organizationId });
        if (!bmcrDoc) {
            return res.status(404).json({ message: "No BMCR data found for the provided organizationId." });
        }

        // Define variables for each collection
        let collection;
        let entity;
        let nameField;
        
        // Assign the appropriate collection to the variable based on the type
        if (type === 'brand') {
            collection = bmcrDoc.brands;
            nameField = 'brandName';
        } else if (type === 'manufacturer') {
            collection = bmcrDoc.manufacturers;
            nameField = 'manufacturerName';
        } else if (type === 'category') {
            collection = bmcrDoc.categories;
            nameField = 'categoriesName';
        } else if (type === 'rack') {
            collection = bmcrDoc.racks;
            nameField = 'rackName';
        }

        // Check if the new name already exists within the organization
        const existingEntityWithName = collection.find(i => i[nameField] === name && i._id.toString() !== _id);
        if (existingEntityWithName) {
            return res.status(409).json({ message: `A ${type} with the name "${name}" already exists in this organization.` });
        }

        // Find the specific entity in the collection
        entity = collection.id(_id);
        if (!entity) {
            return res.status(404).json({ message: `${type.charAt(0).toUpperCase() + type.slice(1)} not found.` });
        }

         // Special handling for racks: update associated items if the rack name changes
         if (type === 'rack' && entity.rackName !== name) {
            const oldRackName = entity.rackName;

            // Update the rack name in the BMCR document
            entity.rackName = name;

            // Update associated items in the Item collection
            const result = await Item.updateMany(
                { 
                    rack: oldRackName, // Match the old rackName
                    organizationId: organizationId // Match the organizationId from the request
                },
                { $set: { rack: name } } // Update with the new rackName
            );

            console.log(`Updated ${result.modifiedCount} items associated with the rack from "${oldRackName}" to "${name}".`);
        } else {
            // Update the entity for other types (brand, manufacturer, category)
            entity[nameField] = name;
            entity.description = description;
        }

        // Save the updated BMCR document
        await bmcrDoc.save();

        res.status(200).json({ message: `${type.charAt(0).toUpperCase() + type.slice(1)} updated successfully.` });
        console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} updated successfully:`, entity);

    } catch (error) {
        console.error(`Error updating ${type}:`, error);
        res.status(500).json({ message: "Internal server error." });
    }
};



//delete bmcr
exports.deleteBmcr = async (req, res) => {
    const { type, organizationId } = req.body;
    const { id } = req.params;

    // Validate the type
    const validTypes = ['brand', 'manufacturer', 'category', 'rack'];
    if (!validTypes.includes(type)) {
        return res.status(400).json({ message: "Invalid type provided." });
    }

    // Check if the Organization exists
    const existingOrganization = await Organization.findOne({ organizationId });

    if (!existingOrganization) {
        return res.status(404).json({
            message: "No Organization Found.",
        });
    }

    try {
        // Check if an Organization exists
        const bmcrDoc = await BMCR.findOne({ organizationId });
        if (!bmcrDoc) {
            return res.status(404).json({ message: "No BMCR data found for the provided organizationId." });
        }

        let collection;
        let nameField;
        let associatedField;

        // Define the fields and collection based on type using switch
        switch (type) {
            case 'brand':
                collection = bmcrDoc.brands;
                nameField = 'brandName';
                associatedField = 'brand';
                break;
            case 'manufacturer':
                collection = bmcrDoc.manufacturers;
                nameField = 'manufacturerName';
                associatedField = 'manufacturer';
                break;
            case 'category':
                collection = bmcrDoc.categories;
                nameField = 'categoriesName';
                associatedField = 'categories';
                break;
            case 'rack':
                collection = bmcrDoc.racks;
                nameField = 'rackName';
                associatedField = 'rack';
                break;
            default:
                return res.status(400).json({ message: "Invalid type provided." });
        }

        // Find the entity by ID
        const entity = collection.find(i => i._id.toString() === id);
        if (!entity) {
            return res.status(404).json({ message: `${type.charAt(0).toUpperCase() + type.slice(1)} not found.` });
        }

        // Check if there are items associated with this entity
        const relatedItems = await Item.find({
            [associatedField]: entity[nameField],
            organizationId: organizationId
        });

        if (relatedItems.length > 0) {
            return res.status(400).json({
                message: `${type.charAt(0).toUpperCase() + type.slice(1)} cannot be deleted as it contains items.`,
            });
        }

        // Remove the entity from the collection
        collection.splice(collection.indexOf(entity), 1);
        await bmcrDoc.save();

        res.status(200).json({ message: `${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully.` });
        console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully:`, id);
    } catch (error) {
        console.error(`Error deleting ${type}:`, error);
        res.status(500).json({ message: "Internal server error." });
    }
};






