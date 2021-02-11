module.exports = (app) => {
  const save = async (account) => {
    return app.db('accounts').insert(account);
  };

  const findAll = (filter = {}) => {
    return app.db('accounts')
      .where(filter)
      .select();
  };

  return { save, findAll };
};
