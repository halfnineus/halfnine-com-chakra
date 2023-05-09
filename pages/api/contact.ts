export default async function contactMail(req: any, res: any) {
  if (req.method === 'POST') {
    const { name, email, phone, company, message } = req.body;
    const senderIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'];
    const referrer = req.headers['referer'];

    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: "diogamb@gmail.com",
      from: "donotreply@ochoa.pro",
      subject: `Message From ${name}`,
      text: message + " | Sent from: " + email,
      html: `<div>${message}</div><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Company: ${company}</p><p>IP: ${senderIp}</p><p>User Agent: ${userAgent}</p><p>Referrer: ${referrer}</p>`,
    }

    try {
      await sgMail.send(msg);
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