import express from "express";

import router from "./routes/topicRoute.js";

const app = express();
const port = 3004;

app.listen(port, () => {
  console.log(`listening to the PORT ${port}`);
  console.log(`check URL http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use(express.json());
app.use("/topics", router);
