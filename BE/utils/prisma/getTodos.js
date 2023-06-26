const prisma = require("../../prisma/prisma");

module.exports = async function (userId, date) {
  try {
    const res = await prisma.todo.findMany({ where: { userId, date } });
    return res;
  } catch (e) {
    return null;
  }
};
