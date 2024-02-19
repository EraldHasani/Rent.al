const RezervimiController = require("../controllers/rezervimi.controller")
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
app.get('/rezervim',authenticate, RezervimiController.getAllForms);
app.get('/rezervim/:id',authenticate, RezervimiController.getFormById);
app.post('/rezervim',authenticate, RezervimiController.createForm);
app.get("/api/rezervim/users/:id",authenticate, RezervimiController.getRezervimbyUserId);

};


