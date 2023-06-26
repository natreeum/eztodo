const prisma = require("../../prisma/prisma");

module.exports = async function (userId, date, content) {
  try {
    const res = await prisma.todo.create({ data: { userId, date, content } });
    return res;
  } catch (e) {
    return null;
  }
};
