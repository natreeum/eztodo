const signin = require("../../utils/prisma/signin");
module.exports = async function (req, res) {
  const { id, password } = req.body;
  const signinRes = await signin(id, password);
  if (signinRes) return res.status(200).send({ status: true, data: signinRes });
  else return res.status(200).send({ status: false, data: {} });
};
