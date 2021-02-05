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
    if (!user.name) return { error: 'Nome é um atributo obrigatório' };
    if (!user.email) return { error: 'Email é um atributo obrigatório' };
    return app.db('users').insert(user);
  };

  return { findAll, save, findByEmail };
};
