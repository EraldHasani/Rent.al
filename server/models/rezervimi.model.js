const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const RezervimSchema = new mongoose.Schema({

  
    targa: {
      type: String,
      required: [true, "Targa is required"]
    },
    cmimiTotal: {
      type: Number,
      required: [true, "Cmimi total is required"]
    },
    
ditet: {
  type: Number,
  required: [true, "Ditet is required"]
},

dataRezervimit: {
  type: Date,
  required: [true, "Data Rezervimit is required"]
},
cmimiDitor: {
type: String,
required: true,
},

userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
    },

  formId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Form",
    required: true
    },

  }, {timestamps: true});




module.exports = mongoose.model('Rezervimi', RezervimSchema);