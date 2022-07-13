import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'path'


// you would have to import / invoke this in another file
export default async function contactMail(req: any, res: any) {
  open({
    filename: path.resolve('./databases/emails.db'),
    driver: sqlite3.Database
  }).then((db) => {
    db.exec('CREATE TABLE IF NOT EXISTS emaildb (col TEXT)')
    db.exec('INSERT INTO emaildb VALUES ("test")')
  }


  if (req.method !== "POST") {
    res.status(405).send(`Hi, I'd say nice try... but it wasn't`); // Incorrect request method
    return
  }


  // require('dotenv').config()
  // let nodemailer = require('n odemailer')

  // const transporter = nodemailer.createTransport({
  //   host: process.env.smtpserver,
  //   port: process.env.smtpport,
  //   auth: {
  //     user: process.env.donotreplyemail,
  //     pass: process.env.password,
  //   },
  //   secure: true,
  // });


  // const mailData = {
  //   from: process.env.donotreplyemail,
  //   to: process.env.myemail,
  //   subject: `Message From ${req.body.name}`,
  //   text: req.body.message + " | Sent from: " + req.body.email,
  //   html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
  // }

  // transporter.sendMail(mailData)


  // const mailData2 = {
  //   from: process.env.donotreplyemail,
  //   to: req.body.email,
  //   subject: `Hello! ${req.body.name} We will contact you shortly. Thankyou for your interest!`,
  //   text: req.body.message + " | Sent from: " + req.body.email,
  //   html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
  // }

  // const errorMailData3 = {
  //   from: process.env.donotreplyemail,
  //   to: process.env.myemail,
  //   subject: `Failed Message From ${req.body.name}`,
  //   text: req.body.message + " | Sent from: " + req.body.email,
  //   html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
  // }


  // transporter.sendMail(mailData, function (err: any, info: any) {
  //   if (err) {
  //     console.log(err)
  //   }
  //   else {
  //     console.log(info);
  //   }
  // })

  // transporter.sendMail(mailData2, function (err2: any, info2: any) {
  //   if (err2) {
  //     console.log(err2)
  //   }
  //   else {
  //     console.log(info2);
  //   }
  // })

  console.log(req.body)
  res.send('success')

}