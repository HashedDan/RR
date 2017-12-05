const express = require('express');
const router = express.Router();
const organizations = require('./requests/organizations');
const members = require('./requests/members');
const recruits = require('./requests/recruits');

router.get('/organizations', organizations.getAll);

module.exports = router;