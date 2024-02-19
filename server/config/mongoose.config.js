const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


    module.exports = connectDB = async () => {
        try {
            await mongoose.connect('mongodb://localhost/gjej', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
              
            });
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Failed to connect to MongoDB', error);
        }
    }
