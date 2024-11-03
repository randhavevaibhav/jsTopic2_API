import express from "express";

import router from "./routes/topicRoute.js";
import cors from "cors";
const app = express();
const port = 3004;

// Middleware for parsing request body

app.use(express.json());

//Middleware for CORS POLICY
app.use(cors());

app.listen(port, () => {
  console.log(`listening to the PORT ${port}`);
  console.log(`check URL http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use(express.json());
app.use("/topics", router);
