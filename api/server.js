const express = require('express'),
      cors = require('cors'),
      path= require('path'),
      bodyParser= require('body-parser'),
      mongoose= require('mongoose'),
      config = require('./DB');
      businessRoute = require('./routes/business-route');

      mongoose.connect(config.DB,{useNewUrlParser:true}).then(() => {
        console.log("Connected to Database");
        }).catch((err) => {
            console.log("Not Connected to Database ERROR! ", err);
        });

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/business', businessRoute);


const server = app.listen(3000,()=> {
    console.log("Server is running on port 3000")
})