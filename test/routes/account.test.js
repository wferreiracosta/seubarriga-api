const request = require('supertest');
const app = require('../../src/app');

const MAIN_ROUTE = '/accounts';
const email = `${Date.now()}@mail.com`;
const newUser = { name: 'Walter Mitty', email, passwd: '123456' };
let user;

beforeAll(async () => {
  await app.services.user.save(newUser);
  return app.services.user.findAll(newUser)
    .then((returnedUser) => {
      user = returnedUser[0];
    });
});

test('Deve inserir uma conta com sucesso', () => {
  return request(app).post(MAIN_ROUTE)
    .send({ name: 'Acc #1', user_id: user.id })
    .then((result) => {
      expect(result.status).toBe(201);
      expect(result.body.name).toBe('Acc #1');
    });
});

test('Deve listar todas contas', () => {
  return app.db('accounts')
    .insert({ name: 'Acc #1', user_id: user.id })
    .then(() => request(app).get(MAIN_ROUTE))
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});
