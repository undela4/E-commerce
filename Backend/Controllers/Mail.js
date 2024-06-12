const nodemailer=require('nodemailer');

const nodeConfig={
        service:"gmail",
        secure:false,
        auth:{
            user:'muraliundela29@gmail.com',
            pass:'mlgp kyvr sgqt xafv'
        }
}

const transpoter=nodemailer.createTransport(nodeConfig);

exports.Mail=async(req,res,next)=>{


    const {email,username}=req.body;

    const info=`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to RecipesShare!</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #dde5ec; padding: 20px;">
    
    <div style="max-width: 600px; margin: 0 auto; background: #f3f8f3;border-radius: 5px;font-family: 'Times New Roman', Times, serif;">
     
        <div style="background-color: red; color:red; padding: 10px; border-radius: 10px 10px 0px 0px;">
            <img src="https://firebasestorage.googleapis.com/v0/b/react-647c1.appspot.com/o/mail1.jpg?alt=media&token=0b3188d0-bf3f-4544-b5fd-ba97a9cbf032">
        </div>
        <img src="https://firebasestorage.googleapis.com/v0/b/react-647c1.appspot.com/o/25224_294121_10150_image.jpg?alt=media&token=4ae50e7b-a745-4382-96cd-2b208f9b59b0" style="width:100%;object-fit:contain;">
        <div style="text-align: center">
            <p >Hi <b>${username}</b></p>
            <p >Welcome To RecipesShare<br/></p>
            <p >You can also sign up manually by entering the following OTP</p>
            <div style="display: flex; justify-content: center; align-items: center; margin-top: 10px;"><div style="height: 30px; width: 300px; border: 4px dotted red; margin-left: 10px;text-align: center; font-size: 22px;padding: 4px; letter-spacing: 5px;">${req.app.locals.OTP}</div></div>
            <p ><b>Note:</b> The OTP will expire in 10 minutes and can only be used once.</p>
            <p >Thank you</p>
            <p >Team RecipesShare</p>
            <p style="margin-top: 10px;">If you did not make this request, you can safely ignore this message</p>
        </div>
        <div style="height:80px; background-color: black;padding: 10px; display: flex;justify-content: center; border-radius: 0px 0px 10px 10px;" >
            <img src="https://firebasestorage.googleapis.com/v0/b/react-647c1.appspot.com/o/User_Profiles%2Flogo2.png?alt=media&token=911d6a35-5109-4f09-b44e-4c54aa416204" style="width: 250px; height: inherit; align-items: center;"/>
        </div>
    </div>
    
      </div>
    </body>
    </html>` 

    const message={
        from:'muraliundela29@gmail.com', 
        to:email,
        subject:"RecipeShare",
        html:info
    }

 transpoter.sendMail(message).then((r)=>{

    res.status(200).send({status:true,otp:req.app.locals.OTP});
})
.catch((err)=>{
    console.log('hello')
    console.log(err.message)
    res.status(200).send({status:false,msg:'Otp Unsend'});
})


   

}