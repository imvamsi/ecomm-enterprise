import express from "express";

const app = express();
const PORT = 8000;
app.get("/", (req, res) => {
  res.send("hello from ts(not yet)");
});

app.listen(PORT, () => {
  console.log(`now running on port ${PORT}`);
});
