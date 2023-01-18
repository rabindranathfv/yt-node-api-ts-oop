import express from "express";
import { NODE_ENV, PORT } from "./config/config";

const app = express();

app.listen(PORT, () => {
  console.log(`api runing in Mode: ${NODE_ENV} port: ${PORT} `);
});
