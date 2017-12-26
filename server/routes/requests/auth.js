const db = require('../../models/index');
const passport = require('../../auth/localconfig.js');
const bcrypt = require('bcryptjs');

export.register = (req, res, next) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  const query = db.sequelize.query('INSERT INTO members (member_first, member_last, member_org, member_email, member_pass, member_level) VALUES ($1, $2, $3, $4, $5, $6)', [req.body.first, req.body.last, req.body.org, req.body.email, hash, 0], (err, results) => {
    if (err) {
      res.status(400).json({ status: err.message });
    } else {
      passport.authenticate('local', (err, user, info) => {
        if (err) { handleResponse(res, 500, 'error'); }
        if (!user) { handleResponse(res, 404, 'User not found'); }
        if (user) {
          req.logIn(user, function(err) {
            if (err) { handleResponse(res, 500, 'error'); }
            res.status(200).json({ user: req.user });
          });
        }
      })(req, res, next);
    }
  })
}

export.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { handleResponse(res, 500, 'error'); }
    if (!user) { handleResponse(res, 404, 'User not found'); }
    if (user) {
      req.logIn(user, function(err) {
        if (err) { handleResponse(res, 500, 'error'); }
        handleResponse(res, 200, 'success');
        console.log(req.session);
      });
    }
  })(req, res, next);
}

export.logout = (req, res, next) => {
  req.session.destroy();
  handleResponse(res, 200, 'success');
}
