/*const transporter = require('../config/mail');  


async function sendConfirmationEmail(to, confirmationLink) {
  const mailOptions = {
    from: '"Vida Notificações" <vida.app@gmail.com>',
    to,
    subject: 'Confirme seu cadastro na Vida',
    html: `
      <h1>Bem-vindo(a) ao Vida!</h1>
      <p>Para ativar sua conta, clique no link abaixo:</p>
      <a href="${confirmationLink}">${confirmationLink}</a>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail enviado:', info.messageId);
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    throw error;
  }
}

module.exports = { sendConfirmationEmail };*/
