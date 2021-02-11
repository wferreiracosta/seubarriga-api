module.exports = (app) => {
  const create = async (req, res) => {
    await app.services.account.save(req.body);
    app.services.account.findAll(req.body)
      .then((returnedAccount) => {
        res.status(201).json(returnedAccount[0]);
      });
  };

  const findAll = (req, res) => {
    app.services.account.findAll()
      .then((result) => res.status(200).json(result));
  };

  return { create, findAll };
};
