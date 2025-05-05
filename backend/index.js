/*const express = require('express');
const { sendConfirmationEmail } = require('./src/services/mailService');

const app = express(); 

app.use(express.json());

app.post('/send-confirmation', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const confirmationLink = `https://suaapi.com/confirm?email=${email}`;

  try {
    await sendConfirmationEmail(email, confirmationLink);
    res.status(200).json({ message: 'Confirmation email sent!' });
  } catch (err) {
    console.error('Erro ao enviar e-mail:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));*/
