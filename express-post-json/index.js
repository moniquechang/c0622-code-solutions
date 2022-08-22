const express = require('express');
const app = express();
let nextId = 1;
const grades = {};

const expJson = express.json();
app.use(expJson);

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const keys in grades) {
    gradesArr.push(grades[keys]);
  }
  res.json(gradesArr);
});

app.post('/api/grades', (req, res) => {
  const reqBody = req.body;
  reqBody.id = nextId;
  grades[nextId] = reqBody;
  nextId++;
  res.status(201);
  res.json(reqBody);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
