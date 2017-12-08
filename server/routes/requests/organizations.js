const db = require('../../models/index');

exports.getAll = (req, res, next) => {
	db.sequelize.query('SELECT * FROM organizations')
		.then(response => {
			console.log(response);
			res.send(response.rows);
		});
	// pool.connect()
	//   .then(client => {
	//     return client.query('SELECT * FROM organizations')
	//       .then(response => {
	//         client.release();
	//         res.send(response.rows)
	//       })
	//       .catch(e => {
	//         client.release();
	//         console.log(err.stack);
	//       })
	//   });


}