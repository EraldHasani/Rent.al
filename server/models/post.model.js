const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const PostSchema = new mongoose.Schema({

  
    destinacioni: {
      type: String,
      required: [true, "Destinacioni is required"]
    },
    pershkrimi: {
      type: String,
      required: [true, "Pershkrimi  is required"]
    },
    eMbyllur: {
      type: Boolean,
      default: false
    },
  users: [   
    {
      firstName:{
           type: String,
           required: [true, "First name is required"]
    },
      lastName:{
          type: String,
          required: [true, "Last name is required"]
      },
      userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
    },
  ],
  
  

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


  }, {timestamps: true});




module.exports = mongoose.model('Post', PostSchema);