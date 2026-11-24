import express from "express";

const app = express();

app.get("/calc", (req, res) => {
  const result = eval(req.query.expr);
  res.send(String(result));
});