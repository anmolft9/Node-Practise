import express from "express";

const app = express();
app.use(express.json()); ///injecting the middleware between the server and client, power to manipulate the data in between

app.listen(8000, (error) => {
  console.log("http://localhost:8000");
  error && console.log(error);
});
