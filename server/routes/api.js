const express = require('express');
const router = express.Router();
const authFuncs = require('../auth/auth-functions');
const organizations = require('./requests/organizations');
const members = require('./requests/members');
const recruits = require('./requests/recruits');

router.get('/login', authFuncs.loginRedirect);

router.get('/organizations', organizations.getAll);

module.exports = router;