module.exports = (app) => {
  const findAll = (req, res) => {
    app.db('users').select()
      .then((result) => res.status(200).json(result));
  };

  const create = async (req, res) => {
    await app.db('users').insert(req.body);
    app.db('users')
      .where('email', req.body.email)
      .select()
      .then((result) => res.status(201).json(result));
  };

  return { findAll, create };
};
