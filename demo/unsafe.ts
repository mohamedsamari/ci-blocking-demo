import express from "express";

const app = express();

// Safe version: no eval, and the response is JSON (not HTML).
app.get("/calc", (req, res) => {
  const result = Number(req.query.expr) * 2;
  res.json({ result });
});