const { Pool } = require('pg');
const pool = new Pool();

exports.getAll = (req, res, next) => {
	pool.connect()
	  .then(client => {
	    return client.query('SELECT * FROM organizations')
	      .then(response => {
	        client.release();
	        res.send(response.rows)
	      })
	      .catch(e => {
	        client.release();
	        console.log(err.stack);
	      })
	  });
}