//make it such that our server.js is as small as possible
//use as many as modules as possible
//use requiore to import funcitons posts and consumer functions
const express = require('express');
const app = express();
const Joi = require('joi'); //this module returns a class so first name is capital for Joi
//use require to import functions imported
const bodyParser = require('body-parser');

const routes = require('./routes');
/*
const posts = require('./routes/posts.js');
const comments = require('./routes/comments.js');
*/
//checklimng for api key
app.use((req,res,next) =>{
if(req.query.api_key){
  next();
}
else{
  res.status(400).send('api key needed');
}
})

app.use(bodyParser.json()); //middleware

app.get('/posts',routes.posts.getPosts);

app.post('/posts',routes.posts.addPost);

app.put('/posts/:postId/',routes.posts.updatePost)

app.delete('/posts/:postId/',routes.posts.removePost)


app.get('/posts/:postId/comments',routes.comments.getComment)

app.post('/posts/:postId/comments',routes.comments.addComment)

app.put('/posts/:postId/comments/commentId',routes.comments.updateComment)

app.delete('/posts/:postId/comments/commentId',routes.comments.removeComment)

const port = process.env.PORT || 3000 //either use variable set by port or use value by 3000
app.listen(port, ()=> console.log(`listening to port ${port}...`)); //shortcut to boot an express server
