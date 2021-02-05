module.exports = (app) => {
  const findAll = (filter = {}) => {
    return app.db('users')
      .where(filter)
      .select();
  };

  const findByEmail = (email) => {
    return app.db('users')
      .where('email', email)
      .select();
  };

  const save = async (user) => {
    const userDb = await findByEmail(user.email);

    if (!user.name) return { error: 'Nome é um atributo obrigatório' };
    if (!user.email) return { error: 'Email é um atributo obrigatório' };
    if (!user.passwd) return { error: 'Senha é um atributo obrigatório' };
    if (userDb && userDb.length > 0) return { error: 'Já existe usuario com esse email' };

    return app.db('users').insert(user);
  };

  return { findAll, save, findByEmail };
};
