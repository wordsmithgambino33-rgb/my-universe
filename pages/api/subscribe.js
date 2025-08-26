import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ message: 'A valid email is required' });
    }

    const confirmationUrl = process.env.NODE_ENV === 'development'
      ? `http://localhost:3001/confirm?email=${encodeURIComponent(email)}`
      : `https://gambinos-universe.vercel.app/confirm?email=${encodeURIComponent(email)}`;

    try {
      await resend.emails.send({
        from: 'no-reply@gambinos-universe.com', // Replace with your verified domain/email
        to: email,
        subject: 'Confirm Your Subscription to Gambino’s Universe',
        html: `<p>Thank you for subscribing! Click <a href="${confirmationUrl}">here</a> to confirm your subscription.</p>`,
      });
      console.log('Confirmation email sent to:', email);
      res.status(200).json({ message: 'Confirmation email sent', email });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send confirmation email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}