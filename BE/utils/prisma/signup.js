const prisma = require("../../prisma/prisma");

async function signup(id, username, password) {
  try {
    const db_res = await prisma.user.create({
      data: { id, username, password },
    });
    return db_res;
  } catch (e) {
    return null;
  }
}

module.exports = signup;
