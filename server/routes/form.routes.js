const formController = require("../controllers/form.controller")
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
app.get('/forms',authenticate, formController.getAllForms);
app.get('/forms/:id',authenticate, formController.getFormById);
// app.post('/forms',authenticate, formController.createForm);
app.put('/forms/:id',authenticate, formController.updateForm);
app.delete('/forms/:id',authenticate, formController.deleteForm);
app.get("/filtered-forms/:qyteti",authenticate, formController.findAllbyQyteti);
app.get("/filtered-forms/:brandi",authenticate, formController.findAllbyBrand);
app.get("/filtered-forms/:vitiProdhimit",authenticate, formController.findAllbyViti);
app.get("/filtered-forms",authenticate, formController.findAllFiltered);

};


