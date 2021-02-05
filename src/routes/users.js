module.exports = (app) => {
  const findAll = (req, res) => {
    app.services.user.findAll()
      .then((result) => res.status(200).json(result));
  };

  const create = async (req, res) => {
    const result = await app.services.user.save(req.body);

    if (result.error) {
      return res.status(400).json(result);
    }

    app.services.user.findByEmail(req.body.email)
      .then((returnedUser) => res.status(201).json(returnedUser));
  };

  return { findAll, create };
};
