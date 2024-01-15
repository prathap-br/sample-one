import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("beanstalk working");
});

const port = process.env.port ||8080

app.listen(port, () => {
  console.log(`app listen on 8080`);
});
