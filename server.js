const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const port = 8800;

app.listen(port,()=>{
    console.log("Server is up and running on http://www.localhost: "+port);

})
