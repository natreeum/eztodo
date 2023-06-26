const signup = require("../../utils/prisma/signup");

module.exports = async function (req, res) {
  try {
    const { id, username, password } = req.body;
    const db_res = await signup(id, username, password);
    return res.status(201).send({ id: db_res.id });
  } catch (e) {
    return res.status(500).send("Error");
  }
};
