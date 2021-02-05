module.exports = (app) => {
  const findAll = () => {
    return app.db('users').select();
  };

  const findByEmail = (email) => {
    return app.db('users')
      .where('email', email)
      .select();
  };

  const save = (user) => {
    return app.db('users').insert(user);
  };

  return { findAll, save, findByEmail };
};
