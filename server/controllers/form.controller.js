const Form = require('../models/form.model');

const formController = {

getAllForms: async (req, res) => {
    try {
    const forms = await Form.find();
    res.json(forms);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
},

getFormById: async (req, res) => {
    try {
    const form = await Form.findById(req.params.id);
    if (form) {
        res.json(form);
    } else {
        res.status(404).json({ message: 'Form not found' });
    }
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
},

createForm: async (req, res) => {
    const form = new Form(req.body);
    try {
    const newForm = await form.save();
    res.status(201).json(newForm);
    } catch (error) {
    res.status(400).json({ message: error.message });
    }
},


findAllbyQyteti: async (req, res) => {
    try {
    const forms = await Form.find({qyteti: req.params.qyteti});
    res.json(forms);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
},

findAllbyBrand: async (req, res) => {
    try {
    const forms = await Form.find({brandi: req.params.brandi});
    res.json(forms);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
},
findAllbyViti: async (req, res) => {
    try {
    const forms = await Form.find({vitiProdhimit: req.params.vitiProdhimit});
    res.json(forms);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
},

findAllFiltered: async (req, res) => {
    try {
      let query = {};
      if (req.query.qyteti) {
        query.qyteti = {$in : req.query.qyteti.split(',')};
      }
      if (req.query.brandi) {
        query.brandi = { $in: req.query.brandi.split(',') };
    }
      if (req.query.fuel) {
        query.fuel ={ $in: req.query.fuel.split(',') };
      }
        if (req.query.vitiProdhimit) {
            query.vitiProdhimit = { $in: req.query.vitiProdhimit.split(',') };
        }
    const forms = await Form.find(query);
    res.json(forms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
},

eZene: async (req, res) => {
    try {
    const form = await Form.findById(req.params.id);
    if (form) {
        form.set({eLire: false});
        const updatedForm = await form.save();
        res.json(updatedForm);
    }
    } catch (error) {
    res.status(400).json({ message: error.message });
    }
},

eLire: async (req, res) => {
    try {
    const form = await Form.findById(req.params.id);
    if (form) {
        form.set({eLire: true});
        const updatedForm = await form.save();
        res.json(updatedForm);
    }
    } catch (error) {
    res.status(400).json({ message: error.message });
    }
},



// createForm: async (req, res) => {
//     try {
//       // Extract form data from the request body
//       const formData = req.body;
  
//       // Extract files from the request
//       const files = req.files;
  
//       // Prepare an object to store all form data including photos
//       const formFields = {};
  
//       // Iterate over form data and add it to the formFields object
//       Object.keys(formData).forEach(key => {
//         formFields[key] = formData[key];
//       });
  
//       // Prepare the array to store file paths or binary data, depending on your setup
//       const photos = [];
  
//       // Iterate over files and push them to the photos array
//       files.forEach(file => {
//         // You may want to save the file path or binary data here
//         // For example, if you're using binary data, you can push file.buffer
//         photos.push(file.buffer); // This stores the file data as Buffer, adjust as needed
//       });
  
//       // Add the photos array to the formFields object
//       formFields.photos = photos;
  
//       // Create a new Form instance with all form data including photos
//       const form = new Form(formFields);
  
//       // Save the form to the database
//       const newForm = await form.save();
  
//       res.status(201).json(newForm);
//     } catch (error) {
//       console.error(error);
//       res.status(400).json({ message: error.message });
//     }
//   },
  

  
updateForm: async (req, res) => {
    try {
    const form = await Form.findById(req.params.id);
    if (form) {
        form.set(req.body);
        const updatedForm = await form.save();
        res.json(updatedForm);
    } else {
        res.status(404).json({ message: 'Form not found' });
    }
    } catch (error) {
    res.status(400).json({ message: error.message });
    }
},



deleteForm: async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (form) {
            await form.deleteOne();
            res.json({ message: 'Form deleted successfully' });
        } else {
            res.status(404).json({ message: 'Form not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete form', error: error.message });
    }
}
};   


// deleteForm: async (req, res) => {
//     try {
//         const form = await Form.findById(req.params.id);
//         if (form) {
//             await form.remove();
//             res.json({ message: 'Form deleted successfully' });
//         } else {
//             res.status(404).json({ message: 'Form not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to delete form', error: error.message });
//     }
// }
// };   

module.exports = formController;
