const passport = require('passport');
// const pg = require('pg');
// const connection = 'postgres://g4:guqdTp5A2VSUjedF@localhost:5432/g4';

// var client = new pg.Client(connection);
// client.connect();
const db = require('../models/index');

module.exports = () => {

  passport.serializeUser((user, done) => {
    done(null, user.member_id);
  });

  passport.deserializeUser((id, done) => {
  //   const query = client.query('SELECT * FROM members WHERE  member_id = ' + id, (err, results) => {
		// user = results.rows[0];
		// return done(null, user);
  //   })
  	const query = db.sequelize.query('ELECT * FROM members WHERE  member_id = ' + id, [email], (err, results) => {
		if (results.rows.length < 1) {
			return done(null, false);
		}
		user = results.rows[0];
		if (!authFuncs.comparePasswords(password, user.member_pass)) {
			return done(null, false);
		}
		else {
			console.log("successful authentification");
			console.log(user);
			return done(null, user);
		}
    })
  });

};