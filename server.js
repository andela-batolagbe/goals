
//load environment variables using dotenv
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 5000;

import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static(__dirname, { redirect: false }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allow cross origin requests
app.use((err, req, res, next) => {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token");

  if (err) {
    console.log('Express Error:', err.stack)
    return res.status(400)
      .send({
        error: true,
        message: 'App encountered error. kindly try again'
      })
  }
  next();
});

app.post('/create', (req, res) => {
  const data = req.body.goal;
  const goals = fs.readFileSync(__dirname + '/goals.json');
  const goalList = JSON.parse(goals);
  goalList.push(data);
  console.log(goalList);
  fs.writeFile(__dirname + '/goals.json', JSON.stringify(goalList), (err, done) => {
    console.log(err, done);
    if (err) {
      return res.status(400).send({
        message: "Error adding goal, kinldy try again",
      })
    }
    return res.status(201).send({
        message: "Goal added",
      })
  })
});

app.get('*', (req, res) => {
    res.sendFile(process.cwd() + '/dist/client/index.html');
});

app.listen(port);
console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV);
console.log('magic happens at ' + port);
export default app;