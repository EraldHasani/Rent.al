const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({

    role:{ 
        type: String,
        required: [true, "Role is required"],
        default: "client",
        
            
    },
    
    firstName: {
      type: String,
      required: [true, "First name is required"]
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: [
        {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email!"
      },
    {
        validator: async val =>{
            let foundUser = await mongoose.models.User.findOne({email: val});
            return !foundUser
        },
        message: "This email already exists, try another one!"
      }
    
]},
favorites: [
  
   {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Form',
      required: true,
  },
  
],
phoneNumber: {
  type: Number,
  required: [true, "Phone number is required"]
},
birthday: {
  type: Date,
  required: [true, "Birthday is required"]
},
gender: {
type: String,
required: true,
},
adress: {
  type: String,
  // required: [true, "Adress is required"]
},
postalCode: {
  type: Number,
  // required: [true, "Postal code is required"]
},
city: {
  type: String,
  // required: [true, "City is required"]
},

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"]
    }
  }, {timestamps: true});

  UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );

  UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
      this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
  });

// this should go after 
UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    });
});

module.exports = mongoose.model('User', UserSchema);