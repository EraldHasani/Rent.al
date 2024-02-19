const connectDB = require('./config/mongoose.config');
const express = require('express');
const cors = require('cors');
const Form = require('./models/form.model');
const app = express();
const cookieParser = require('cookie-parser');
const multer=require('multer');
const { authenticate } = require('./config/jwt.config');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});

  
 
  const upload = multer({ storage: storage });

require('dotenv').config();   
app.use(express.json());                           /* This is new and allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));   /* This is new and allows JSON Objects with strings and arrays*/

app.use(cors({
    origin: 'http://localhost:5173', // Update with your client's origin
    credentials: true,
  }));
  app.use(cookieParser());
  app.use('/public', express.static('public'));  


connectDB( );
require('./config/mongoose.config');  

require('./routes/user.routes')(app);
require('./routes/form.routes')(app);
require('./routes/rezervimi.routes')(app);
require('./routes/post.routes')(app);


app.post('/forms', upload.single('image'), async (req, res) => {
    try {
        const form = new Form(req.body);
        if (req.file) {
            // Construct the correct image URL
            const filePath = req.file.path.replace(/\\/g, '/');
            form.image = `http://localhost:8000/${filePath}`;
        }
        await form.save();
        res.status(201).send("New form saved.");
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});



app.listen(8000, () => {
    console.log("Listening at Port 8000")
})




///////////////
