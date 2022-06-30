export default async function (req: { body: { name: any; message: string; email: string; }; }, res: { send: (arg0: string) => void; }) {
  require('dotenv').config()
  let nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    host: "smtp.ochoa.pro",
    port: 465,
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.email,
    to: process.env.myemail,
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
  }
  

  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err)
      console.log(err)
    else
      console.log(info);
  })

  console.log(req.body)
  res.send('success')
}