const { Router } = require("express");
const fs = require("fs");

const router = Router();

router.get("/", (req, res) => {
  return res.send("API Server");
});

// Load Routers
fs.readdirSync(__dirname)
  .filter((f) => f.indexOf(".") !== 0 && f.slice(-8) === "route.js")
  .forEach((r) =>
    router.use(`/${r.split(".")[0]}`, require(`${__dirname}/${r}`))
  );

module.exports = router;
