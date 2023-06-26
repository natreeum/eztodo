const prisma = require("../../prisma/prisma");

module.exports = async function (id) {
  try {
    const user = await prisma.user.findFirst({ where: { id } });
    return user;
  } catch (e) {
    return null;
  }
};
