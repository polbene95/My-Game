const express = require('express');
const bodyParser = require('body-parser');
// const mongodb = require('mongodb');
// const router = express.Router();
// const MongoClient = require('mongodb').MongoClient;
// const ObjectID = require('mongodb').ObjectID;


const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, () => {console.log(`Server running in port: ${PORT}`)})
// app.use(router);

