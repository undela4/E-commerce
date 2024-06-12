exports.localvariable=(req,res,next)=>{

    req.app().locals={
        OTP:null,
        restSession:false
    }
    next();
}   