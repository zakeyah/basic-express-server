'use strict';

module.exports =(req,res,next)=>{
  res.status(404).json({
    message: 'NOT FOUND',
    path:req.path  });
};
