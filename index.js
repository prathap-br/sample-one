import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("beanstalk working");
});

app.listen(80, () => {
  console.log(`app listen on 8080`);
});
