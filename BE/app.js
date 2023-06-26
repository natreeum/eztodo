const express = require("express");
const router = require("./routers/router");
const cors = require("cors");

const app = express();

const PORT = 8888;
app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
