const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { User } = require('../models');
require('dotenv').config();

const register = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        // Verifica se o usuário já existe
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) return res.status(400).json({ message: 'Usuário já cadastrado' });

        // Criptografa a senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Cria o usuário
        const user = await User.create({ name, email, phone, password: hashedPassword });

        // Envia e-mail de boas-vindas
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
            subject: 'Bem-vindo à nossa plataforma!',
            text: `Olá ${name},\n\nObrigado por se cadastrar! Estamos felizes em ter você conosco.`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Erro ao enviar e-mail de boas-vindas:', error);
            } else {
                console.log('E-mail de boas-vindas enviado:', info.response);
            }
        });

        // Resposta para o front-end
        res.status(201).json({ message: 'Usuário criado com sucesso', user: { id: user.id, name: user.name } });
    } catch (err) {
        res.status(500).json({ message: 'Erro ao registrar usuário', error: err.message });
    }
};

module.exports = { register };


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(400).json({ message: 'Usuário não encontrado' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Senha incorreta' });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '2h' });

        res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
    } catch (err) {
        res.status(500).json({ message: 'Erro ao fazer login', error: err.message });
    }
};

module.exports = { register, login };