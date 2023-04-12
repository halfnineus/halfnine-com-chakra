export default async function contactMail(req: any, res: any) {

  if (req.method !== "POST") {
    res.status(405).send(`Hi, I'd say nice try… but it wasn't`)
    return
  }

  require('dotenv').config()

  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: "diogamb@gmail.com",
    from: "donotreply@ochoa.pro",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Email: ${req.body.email}</p><p>Phone: ${req.body.phone}</p><p>Company: ${req.body.company}</p>`,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error: any) => {
      console.error(error)
    })
  res.send('success')

}


// export default async function contactMail(req: any, res: any) {
//   console.log('Request Method:', req.method);
//   if (req.method === 'POST') {
//     console.log('Request Body:', req.body);
//     const { name, email, phone, company, message } = req.body;

//     const nodemailer = require("nodemailer");
    
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_SERVER,
//       port: Number(process.env.SMTP_PORT),
//       secure: false,
//       auth: {
//         user: process.env.DONOTREPLY_EMAIL,
//         pass: process.env.PASSWORD,
//       },
//     });
//     console.log('Transporter:', transporter);

//     try {
//       const info = await transporter.sendMail({
//         from: process.env.DONOTREPLY_EMAIL,
//         to: process.env.MY_EMAIL,
//         subject: `New Message From ${name}`,
//         text: `${message} | Sent from: ${email}`,
//         html: `<div>${message}</div><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Company: ${company}</p>`,
//       });
//       console.log('Email Info:', info);

//       res.status(200).json({ status: 'success' });
//     } catch (error) {
//       console.error('Error:', error);
//       res.status(500).json({ status: 'error', error });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
