const updateTodo = require("../../utils/prisma/updateTodo");

module.exports = async function (req, res) {
  const { id, isDone } = req.body;
  try {
    const result = await updateTodo(id, isDone);
    return res.send(result);
  } catch (e) {
    console.log(e);
    return res.status(500).send("error");
  }
};
