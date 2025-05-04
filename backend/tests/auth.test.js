const request = require('supertest');
const app = require('../src/app');
const sequelize = require('../src/config/database');
const User = require('../src/models/User');

describe('Auth API', () => {
  beforeAll(async () => {
    // para garantir q o banco está sincronizado
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  let token = '';

  it('deve registrar um novo usuário', async () => {
    const res = await request(app).post('/api/auth/register').send({
      name: 'Usuário Teste',
      email: 'teste@example.com',
      phone: '11999999999',
      password: '123456',
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('user');
    expect(res.body.user).toHaveProperty('id');
  });

  it('deve fazer login com sucesso', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'teste@example.com',
      password: '123456',
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');

    token = res.body.token;
  });

  it('deve acessar a rota protegida /me com JWT', async () => {
    const res = await request(app)
      .get('/api/user/me')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.user).toHaveProperty('email', 'teste@example.com');
  });
});