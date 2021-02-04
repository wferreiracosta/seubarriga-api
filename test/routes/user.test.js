const request = require('supertest');
const app = require('../../src/app');

test('Deve inserir usuario com sucesso', () => {
  const email = `${Date.now()}@mail.com`;
  return request(app).post('/users')
    .send({ name: 'Walter Mitty', email, passwd: '123456' })
    .then((res) => {
      expect(res.status).toBe(201);
    });
});

test('Deve listar todos os usuarios', () => {
  return request(app).get('/users')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});
