const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemsSchema = new Schema({
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
  quantity: { type: Number },
  unit: { type: String },
  amount:{type:Number},
}, { _id: false });

const ServiceSchema = new Schema({
    organizationId:{type:String},
    serviceImage: { type: String },
    serviceName: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", index: true },
    price: { type: Number },
    costPrice: { type: Number },
    sac: { type: String }, 
    staffCommission: { type: Number },

    taxRate:{type:String},
    cgst:{type:Number},
    sgst:{type:Number},
    igst:{type:Number},
    vat:{type:Number},

    product: [itemsSchema]
}, { timestamps: true });

const Services = mongoose.model("Services", ServiceSchema); 

module.exports = Services;
