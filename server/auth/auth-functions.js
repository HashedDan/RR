const path = require('path');
const bcrypt = require('bcrypt');
// const pg = require('pg');
const db = require('../models/index');

function comparePasswords(userPass, dbPass) {
  return bcrypt.compareSync(userPass, dbPass);
}

function createMember(req, res) {
  // return handleErrors(req)
  // .then(() => {
  // 	const salt = bcrypt.genSaltSync();
  // 	const hash = bcrypt.hashSync(req.body.password, salt);
  // 	pool.connect()
  // 	  .then(client => {
  // 	    return client.query('INSERT INTO members (member_first, member_last, member_org, member_email, member_pass) VALUES ($1, $2, $3, $4, $5)', [req.body.first, req.body.last, req.body.org, req.body.email, hash])
  // 	      .then(response => {
  // 	        client.release();
  // 	      })
  // 	      .catch(e => {
  // 	        client.release();
  // 	        res.status(400).json({status: err.message});
  // 	      })
  // 	  });
  // })
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt)

  db.sequelize.query('INSERT INTO members (member_first, member_last, member_org, member_email, member_pass) VALUES ($1, $2, $3, $4, $5)', [req.body.first, req.body.last, req.body.org, req.body.email, hash])
    .then(response => {
      console.log(response);
      res.send(response[0]);
    });
}

function loginRequired(req, res, next) {
  if (!req.user) return res.status(401).sendFile(path.join(__dirname, '..', '..', 'client', '401.html'));
  return next();
}

function loginRedirect(req, res, next) {
  if (req.user) return res.status(401).json({ status: 'You are already logged in' });
  return next();
}


function handleErrors(req) {
  return new Promise((resolve, reject) => {
    if (req.body.email.length < 2) {
      // MODIFY THIS TO MAKE SURE EMAIL IS WELL FORMED
      reject({
        message: 'Username must be longer than 6 characters'
      });
    } else if (req.body.password.length < 6) {
      reject({
        message: 'Password must be longer than 6 characters'
      });
    } else {
      resolve();
    }
  });
}

module.exports = {
  comparePasswords,
  createMember,
  loginRequired,
  loginRedirect
};
