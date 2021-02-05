module.exports = (app) => {
  const findAll = (req, res) => {
    app.services.user.findAll()
      .then((result) => res.status(200).json(result));
  };

  const create = async (req, res) => {
    await app.services.user.save(req.body);
    app.services.user.findByEmail(req.body.email)
      .then((result) => res.status(201).json(result));
  };

  return { findAll, create };
};
