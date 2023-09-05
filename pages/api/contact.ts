import nodemailer from 'nodemailer';

export default async function contactMail(req: any, res: any) {
  if (req.method === 'POST') {
    const { name, email, phone, company, message } = req.body;
    const senderIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'];
    const referrer = req.headers['referer'];

    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let mailOptions = {
      from: 'contactform@halfnine.com',
      to: 'diogamb@gmail.com',
      subject: `Message From ${name}`,
      text: message + " | Sent from: " + email,
      html: `<div>${message}</div><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Company: ${company}</p><p>IP: ${senderIp}</p><p>User Agent: ${userAgent}</p><p>Referrer: ${referrer}</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ status: 'success' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ status: 'error', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
