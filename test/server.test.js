const supertest = require('supertest');
const request = supertest('http://localhost:3001');

// eslint-disable-next-line arrow-body-style
test('Deve responder na porta 3001', () => {
  return request.get('/').then((res) => expect(res.status).toBe(200));
});
