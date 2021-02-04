const request = require('supertest');
const app = require('../src/app');

test('Deve responder na raiz', () => {
  return request(app).get('/')
    .then((res) => {
      expect(res.status).toBe(200);
    });
});

test('Deve inserir usuario com sucesso', () => {
  return request(app).post('/users')
    .send({ name: 'Walter Mitty', email: 'walter@email.com' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Walter Mitty');
    });
});
