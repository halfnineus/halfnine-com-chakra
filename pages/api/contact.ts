export default async function contactMail(req: any, res: any) {

  if (req.method === 'POST') {



    require('dotenv').config()
    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
      host: process.env.smtpserver,
      port: process.env.smtpport,
      auth: {
        user: process.env.donotreplyemail,
        pass: process.env.password,
      },
      secure: true,
    });

    
    const mailData = {
      from: process.env.donotreplyemail,
      to: process.env.myemail,
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }
    const mailData2 = {
      from: process.env.donotreplyemail,
      to: req.body.email,
      subject: `Hello! ${req.body.name} We will contact you shortly. Thankyou for your interest!`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }

    // const errorMailData3 = {
    //   from: process.env.donotreplyemail,
    //   to: process.env.myemail,
    //   subject: `Failed Message From ${req.body.name}`,
    //   text: req.body.message + " | Sent from: " + req.body.email,
    //   html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    // }

    transporter.sendMail(mailData, function (err: any, info: any) {
      if (err) {
        console.log(err)
      }
      else {
        console.log(info);
      }
    })

    transporter.sendMail(mailData2, function (err2: any, info2: any) {
      if (err2) {
        console.log(err2)
      }
      else {
        console.log(info2);
      }
    })


    console.log(req.body)
    res.send('success')

  } else {
    res.send('nope')
  }

}