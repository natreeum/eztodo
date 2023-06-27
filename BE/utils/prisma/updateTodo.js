const prisma = require("../../prisma/prisma");

module.exports = async function (id, isDone) {
  try {
    const res = await prisma.todo.update({
      where: { id: Number(id) },
      data: { isDone },
    });
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};
