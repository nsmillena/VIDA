const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { User } = require('../models');
require('dotenv').config();

const register = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) return res.status(400).json({ message: 'Usuário já cadastrado' });

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ name, email, phone, password: hashedPassword });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        const mailOptions = {
            from: '"Vida Notificações" <vida.app@gmail.com>',
            to: email,
            subject: '🎉 Bem-vindo à nossa plataforma!',
            html: `
                <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                    <h2 style="color:rgba(10, 37, 136, 0.86);">Olá, ${name}!</h2>
                    <p>Obrigado por se cadastrar no <strong>VIDA</strong>! Estamos muito felizes em ter você conosco.</p>
                    <p>Explore nossa plataforma e aproveite todos os recursos que preparamos especialmente para você.</p>
                    <p style="margin-top: 20px;">Qualquer dúvida, estamos à disposição.</p>
                    <p>Abraços,<br><strong>Equipe VIDA</strong></p>
                </div>
            `
        };
        

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ message: 'Erro ao enviar e-mail de boas-vindas', error: error.message });
            }
            console.log('E-mail de boas-vindas enviado:', info.response);
        });
        

        res.status(201).json({ message: 'Usuário criado com sucesso', user: { id: user.id, name: user.name } });
    } catch (err) {
        res.status(500).json({ message: 'Erro ao registrar usuário', error: err.message });
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(400).json({ message: 'Usuário não encontrado' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Senha incorreta' });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '2h' });

        res.json({ token:token, user: user.id});
    } catch (err) {
        res.status(500).json({ message: 'Erro ao fazer login', error: err.message });
    }
};

module.exports = { register, login };