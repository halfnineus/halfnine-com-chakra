import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'path'


// you would have to import / invoke this in another file
export default async function contactMail(req: any, res: any) {

  open({
    filename: path.resolve("./databases/emails.db"),
    driver: sqlite3.Database
  }).then((db) => {
    db.exec('CREATE TABLE IF NOT EXISTS emaildb (col TEXT)')
    db.exec('INSERT INTO emaildb VALUES ("test")')
  })

  if (req.method !== "POST") {
    res.status(405).send(`Hi, I'd say nice try... but it wasn't`); // Incorrect request method
    return
  }

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

  transporter.sendMail(mailData)

  // transporter.sendMail(mailData, function (err: any, info: any) {
  //   if (err) {
  //     console.log(err)
  //   }
  //   else {
  //     console.log(info);
  //   }
  // })


  // console.log(req.body)
  res.send('success')

}