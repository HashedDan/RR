const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

const pool = new Pool();

router.get('/recruits', (req, res) => {
  // promise - checkout a client
  pool.connect()
    .then(client => {
      return client.query('SELECT * FROM recruits WHERE recruit_id = 1')
        .then(response => {
          client.release();
          console.log(response.rows[0]);
          res.send(response.rows[0])
        })
        .catch(e => {
          client.release();
          console.log(err.stack);
        })
    });
});

module.exports = router;