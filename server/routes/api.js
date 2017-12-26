const express = require('express');
const router = express.Router();
const authFuncs = require('../auth/auth-functions');
const auth = require('./requests/auth');
const organizations = require('./requests/organizations');
const members = require('./requests/members');
const recruits = require('./requests/recruits');

router.get('/login', authFuncs.loginRedirect, auth.login);

router.get('/logout', authFuncs.loginRequired, auth.logout);

router.get('/register', authFuncs.loginRedirect, auth.register);

router.get('/organizations', organizations.getAll);

module.exports = router;