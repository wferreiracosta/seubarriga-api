const app = require('express')();
const consign = require('consign');
const knex = require('knex');
const knexlogger = require('knex-logger');
const knexfile = require('../knexfile');

app.db = knex(knexfile.test);

app.use(knexlogger(app.db));

consign({ cwd: 'src', verboso: false })
  .include('./config/middlewares.js')
  .then('./services')
  .then('./routes')
  .then('./config/routes.js')
  .into(app);

app.get('/', (req, res) => {
  res.status(200).send();
});

module.exports = app;
