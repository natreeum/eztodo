const { Router } = require("express");

const getTodos = require("../services/todo/list");
const newTodo = require("../services/todo/newTodo");
const updateTodo = require("../services/todo/updateTodo");

const router = Router();

router.get("/", (req, res) => {
  return res.send("todo root");
});

router.route("/list").post(getTodos);
router.route("/newtodo").post(newTodo);
router.route("/updateisdone").post(updateTodo);

module.exports = router;
