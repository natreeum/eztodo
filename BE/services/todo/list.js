const getTodos = require("../../utils/prisma/getTodos");
module.exports = async function (req, res) {
  const { userId, date } = req.body;
  const db_get_res = await getTodos(userId, date);
  if (db_get_res) return res.send(db_get_res);
  else res.status(500).send("Error");
};
