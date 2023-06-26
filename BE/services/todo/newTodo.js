const createTodo = require("../../utils/prisma/createTodo");

module.exports = async function (req, res) {
  const { userId, date, content } = req.body;
  if (!(userId && date && content)) return res.status(400).send("Bad Request");
  try {
    const db_res = await createTodo(userId, date, content);
    return res.status(201).send(db_res);
  } catch (e) {
    return res.status(500).send("Error");
  }
};
