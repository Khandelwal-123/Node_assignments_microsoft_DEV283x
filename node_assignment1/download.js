const http = require('http')
const fs = require('fs')
const path = require('path')
const uuidv1 = require('uuid/v1')

//given a url download a page
const url = process.argv[2];

//creating a file and a directory
const folderName = uuidv1(); //it return a random folderName
fs.mkdirSync(folderName); //why sync directory

//making an http request
http.get(url,(response)=>{
  data = '';

  response.on('data',(chunk)=>{
    data += chunk ;
  })

  response.on('end',(chunk)=>{
      //console.log(data);
      fs.writeFileSync(path.join(__dirname,folderName,'file.html'),data);
      console.log(`downloading done in ${folderName}`);
  })

}).on('error',(error)=>{
  console.error(`error is : ${error}`)
})
//write html page to a file
//provide url from command line
