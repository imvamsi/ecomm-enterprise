import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT = 8000;
app.get("/", (req: Request, res: Response) => {
  res.send("helloworld aarya");
});

app.listen(PORT, () => {
  console.log(`now running on port ${PORT}`);
});
