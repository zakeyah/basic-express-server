'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const app = express();

app.use(logger);
app.get('/',(req,res)=>{
  res.send('gooood');
});

app.get('/person',validator,(req,res)=>{
  console.log(req.query)
  res.json({
    name:req.query.name
  });

});



function start (port){
  app.listen(port,()=>console.log(`working on ${port}`));
}
app.use('*',notFoundHandler);
app.use(errorHandler);

module.exports={
  app,
  start
};

