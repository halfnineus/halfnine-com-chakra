export default async function contactMail(req: any, res: any) {
  if (req.method === 'POST') {
    const { name, email, phone, company, message, cfTurnstileToken } = req.body;

    // const response = await fetch('https://api.cloudflare.com/client/v4/user/tokens/verify', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${cfTurnstileToken}`
    //   }
    // });
    // const data = await response.json();
    // if (!data.success) {
    //   res.status(401).json({ status: 'error', message: 'Invalid Cloudflare token' });
    //   return;
    // }

    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: "diogamb@gmail.com",
      from: "donotreply@ochoa.pro",
      subject: `Message From ${name}`,
      text: message + " | Sent from: " + email,
      html: `<div>${message}</div><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Company: ${company}</p>`,
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