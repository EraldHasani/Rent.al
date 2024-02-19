const PostController = require('../controllers/post.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    app.get('/api/posts', authenticate,  PostController.findAll);
    app.get('/api/post/:id',authenticate, PostController.findOne);
    app.post('/api/post',authenticate, PostController.create); 
    app.patch('/api/post/:id',authenticate, PostController.update);
    app.delete('/api/post/:id',authenticate, PostController.delete);
    app.patch('/api/post/users/:id',authenticate, PostController.AddUserToPost);

    app.post("/shpallje/eZene/:id" ,authenticate, PostController.eZene);
    app.post("/shpallje/eLire/:id" ,authenticate, PostController.eLire);
    


}