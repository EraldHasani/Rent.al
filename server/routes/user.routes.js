const UserController = require('../controllers/user.controller');
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login)
    app.post('/api/logout', authenticate, UserController.logout)
    app.get('/api/users/:id',  authenticate ,UserController.getOneUserbyId)
    app.post("/favorites/:id/:userId",authenticate, UserController.AddFavorite);
    app.get("/favorites/:userId",authenticate, UserController.GetAllFavorites);
    app.post("/deleteFavorite/:id/:userId",authenticate, UserController.DeleteFavorite);
    app.post("/eZene/:id" ,authenticate, UserController.eZene);
    app.post("/eLire/:id" ,authenticate, UserController.eLire);


}
