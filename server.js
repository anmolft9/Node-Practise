import express from "express";
import path from "path";
import fs from "fs";

const _dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(express.urlencoded()); //encoding the json file
///injecting the middleware between the server and client, power to manipulate the data in betwee

const file = _dirname + "/list.text";
app.get("/", (req, res) => {
  res.sendFile(_dirname + "/forms/loginForm.html");
});

app.get("/registration", (req, res) => {
  res.sendFile(_dirname + "/forms/registrationForm.html");
});

app.post("/", (req, res) => {
  const { email, password } = req.body;
  const str = email + "|" + password;
  fs.readFile(file, (error, data) => {
    error && console.log(error);
    const list = data.toString().split("\n");
    if (list.includes(str)) {
      console.log("In");
    } else {
      console.log("Not In");
    }
  });
});
app.post("/registration", (req, res) => {
  const { email, password } = req.body;
  const data = email + "|" + password + "\n";

  fs.appendFile(file, data, (error) => {
    error && console.log(error);
  });
});

app.listen(8000, (error) => {
  console.log("http://localhost:8000");
  error && console.log(error);
});
