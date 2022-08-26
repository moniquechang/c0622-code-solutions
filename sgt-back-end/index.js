const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
    from "grades"
 `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.post('/api/grades', (req, res) => {
  if (req.body.name === undefined) {
    res.status(400).json({ error: 'missing a valid name.' });
  } else if (req.body.course === undefined) {
    res.status(400).json({ error: 'missing a valid course.' });
  } else if (req.body.score === undefined) {
    res.status(400).json({ error: 'missing a valid score.' });
  } else if (Number(req.body.score) < 0 || Number(req.body.score) > 100 || !Number.isInteger(Number(req.body.score))) {
    res.status(400).json({ error: 'score must be an integer between 0 and 100.' });
  } else {
    const sql = `
     insert into "grades" ("name", "course", "score")
     values ($1, $2, $3)
     returning *
    `;
    const params = [req.body.name, req.body.course, req.body.score];
    db.query(sql, params)
      .then(result => {
        res.status(201).json(result.rows[0]);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (gradeId <= 0 || !Number.isInteger(gradeId)) {
    res.status(400).json({ error: 'gradeId must be a positive integer.' });
  } else if (req.body.name === undefined) {
    res.status(400).json({ error: 'missing a valid name.' });
  } else if (req.body.course === undefined) {
    res.status(400).json({ error: 'missing a valid course.' });
  } else if (req.body.score === undefined) {
    res.status(400).json({ error: 'missing a valid score.' });
  } else if (Number(req.body.score) < 0 || Number(req.body.score) > 100 || !Number.isInteger(Number(req.body.score))) {
    res.status(400).json({ error: 'score must be an integer between 0 and 100.' });
  } else {
    const sql = `
      update "grades"
         set "score" = $1
       where "gradeId" = $2
       returning *
    `;
    const params = [req.body.score, gradeId];
    db.query(sql, params)
      .then(result => {
        if (!result.rows[0]) {
          res.status(404).json({ error: `Cannot find grade with gradeId: ${gradeId}.` });
        } else {
          res.status(200).json(result.rows[0]);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (gradeId <= 0 || !Number.isInteger(gradeId)) {
    res.status(400).json({ error: 'gradeId must be a positive integer.' });
  } else {
    const sql = `
      delete from "grades"
      where "gradeId" = $1
      returning *
    `;
    const params = [gradeId];
    db.query(sql, params)
      .then(result => {
        if (!result.rows[0]) {
          res.status(404).json({ error: `Cannot find grade with gradeId: ${gradeId}.` });
        } else {
          res.sendStatus(204);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
