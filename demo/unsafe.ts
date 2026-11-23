import express from "express";

const app = express();

// DEMO: unsafe code on purpose, to show Semgrep. Never do this.
app.get("/calc", (req, res) => {
  const result = eval(req.query.expr);
  res.send(String(result));
});