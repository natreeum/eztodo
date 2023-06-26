const checkdup = require("../../utils/prisma/getUserData");
module.exports = async function (req, res) {
  try {
    const { id } = req.params;
    const db_res = await checkdup(id);
    if (db_res) return res.send(true);
    else return res.send(false);
  } catch (e) {
    return res.status(500).send("Error");
  }
};
