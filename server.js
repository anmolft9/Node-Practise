import express from "express";
import path from "path";
import fs from "fs";

const _dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(express.urlencoded()); //encoding the json file
///injecting the middleware between the server and client, power to manipulate the data in betwee

app.get("/", (req, res) => {
  res.sendFile(_dirname + "/forms/loginForm.html");
});

app.listen(8000, (error) => {
  console.log("http://localhost:8000");
  error && console.log(error);
});
