module.exports = {
  test: {
    client: 'mysql2',
    version: '9.6',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'barriga',
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};
