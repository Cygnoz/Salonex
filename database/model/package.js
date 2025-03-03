const mongoose = require('mongoose');
const { Schema } = mongoose;

const serviceSchema = new Schema({
    service: {type: mongoose.Schema.Types.ObjectId,ref: 'Service', },
    quantity: {type: Number, },
    packageRate: {type: Number,},
    actualRate: {type: Number,},
}, { _id: false });

const PackageSchema = new mongoose.Schema({
  organizationId: {type: String},
  packageImage: { type: String,},
  packageName: {type: String,},
  sac: {type: String,},
  packageValidity: {type: Number,},
  total: {type: Number,},

  services:[serviceSchema],

}, { timestamps: true });


const Packages = mongoose.model('Package', PackageSchema);

module.exports = Packages;
