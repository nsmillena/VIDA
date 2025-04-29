const app = require('./app');
const sequelize = require('./config/database');

const PORT = process.env.PORT || 5000;

async function start() {
    try {
        await sequelize.authenticate();
        console.log('✅ Conectado ao MySQL com Sequelize');

        await sequelize.sync();

        app.listen(PORT, () => {
            console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('❌ Erro ao conectar no banco:', error.message);
    }
}

start();
