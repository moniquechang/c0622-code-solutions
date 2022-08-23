const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const dataArr = [];
  for (const keys in data.notes) {
    dataArr.push(data.notes[keys]);
  }
  res.status(200).json(dataArr);
});

app.get('/api/notes/:id', (req, res) => {
  const numberId = Number(req.params.id);
  if (numberId <= 0 || !Number.isInteger(numberId)) {
    const resMessage = { error: 'id must be a positive integer' };
    res.status(400).json(resMessage);
  } else if (!data.notes[req.params.id]) {
    const resMessage = { error: `cannot find note with id ${req.params.id}` };
    res.status(404).json(resMessage);
  } else {
    res.status(200).json(data.notes[req.params.id]);
  }
});

app.post('/api/notes', (req, res) => {
  if (req.body.content === undefined) {
    const resMessage = { error: 'content is a required field' };
    res.status(400).json(resMessage);
  } else {
    req.body.id = data.nextId;
    data.notes[req.body.id] = req.body;
    data.nextId++;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, err => {
      if (err) {
        console.error(err);
        const resMessage = { error: 'An unexpected error occurred.' };
        res.status(500).json(resMessage);
      } else { res.status(201).json(req.body); }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const numberId = Number(req.params.id);
  if (numberId <= 0 || !Number.isInteger(numberId)) {
    const resMessage = { error: 'id must be a positive integer' };
    res.status(400).json(resMessage);
  } else if (!data.notes[req.params.id]) {
    const resMessage = { error: `cannot find note with id ${req.params.id}` };
    res.status(404).json(resMessage);
  } else {
    delete data.notes[req.params.id];
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, err => {
      if (err) {
        console.error(err);
        const resMessage = { error: 'An unexpected error occurred.' };
        res.status(500).json(resMessage);
      } else {
        res.status(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const numberId = Number(req.params.id);
  if (numberId <= 0 || !Number.isInteger(numberId)) {
    const resMessage = { error: 'id must be a positive integer' };
    res.status(400).json(resMessage);
  } else if (req.body.content === undefined) {
    const resMessage = { error: 'content is a required field' };
    res.status(400).json(resMessage);
  } else if (!data.notes[req.params.id]) {
    const resMessage = { error: `cannot find note with id ${req.params.id}` };
    res.status(404).json(resMessage);
  } else {
    data.notes[req.params.id].content = req.body.content;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, err => {
      if (err) {
        console.error(err);
        const resMessage = { error: 'An unexpected error occurred.' };
        res.status(500).json(resMessage);
      } else {
        res.status(200).json(data.notes[req.params.id]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
