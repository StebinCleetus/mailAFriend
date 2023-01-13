const express = require('express')
const app = express()

// initialize nodemailer
var nodemailer = require('nodemailer');

//Using the Gmail transport service
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'stebincleetusjohn@gmail.com',
    pass: 'cytlgctbvqzoucnb'
  }
});

//Email 
var mailOptions = {
  from: 'stebincleetusjohn@gmail.com',
  to: 'stebincleetus@gmail.com',
  subject: 'Assignment #03|| Mail a Friend -Stebin Cleetus',
  text: 'This is a sample mail send by using nodeMailer',
  // html:'<h1> Stebin Cleetus</h1> <p>This is a sample mail send by using nodeMailer</p>'
};

//Send your email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


app.listen(3000, () => {
    console.log("server is listen to 3000");
});