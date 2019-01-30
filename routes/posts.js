/*const express = require('express');
const app = express()*/ //modules are cached so calling them again mwont matter much
//use module.exports for the function created
const store = require('./content.js');
module.exports = {
  getPosts(req, res) {
    res.send('this is post get');
  },
  addPost(req, res) {
    //we also need to validate inputs i.e. post request given by clients 400 is for bad request
    //this is one of the way of validating our logic but this may turn into a complex logic so for this we need
    //to use some other frame work(npm joi)
    const schema = {
      name : Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema) ; //return an object containg error and value if some incorrect thing is
    //sent error would be initialisd otherwise value would be ibnitialised
    /*
    if(!req.body.name || !req.body.name.length < 3){
      res.status(400).send('Bad request !') // in the covention of node we tend to send eror messages
    }
    */
    if(result.error){
      //since result is a json object we can use meaage from it also
      res.status(400).send(result.error.details[0].message);
      return ;
    }
    var content = {name : req.body.name , url : req.body.url , text : req.body.text, comments : req.body.comments  } // in order to use boidy we need to allow app.use(express.json())
    store.push(course);
    res.send(course);
  },
  updatePost(req, res) {
    res.send('hello');

  },
  removePost(req, res) {
    res.send('hello');

  }
}
