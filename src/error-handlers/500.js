'use strict';

module.exports =(err,req,res,next)=>{
  res.status(500).json({
    err:err,
    message: `Server Error ${err.message}`,
    rout: req.basUrl  });
};
