const { Router } = require("express");
const signup = require("../services/auth/signup");
const signin = require("../services/auth/signin");
const checkdup = require("../services/auth/checkdup");

const router = Router();

router.get("/", (req, res) => {
  return res.send("auth root");
});

router.route("/checkdup/:id").get(checkdup);

router.route("/signup").post(signup);
router.route("/signin").post(signin);

module.exports = router;
