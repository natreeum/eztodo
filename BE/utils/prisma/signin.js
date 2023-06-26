const prisma = require("../../prisma/prisma");

module.exports = async function (id, password) {
  try {
    const user = await prisma.user.findFirst({ where: { id } });
    if (user.password === password)
      return { id: user.id, username: user.username };
    else throw null;
  } catch (e) {
    return null;
  }
};
