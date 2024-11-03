const express = require("express");
const router = express.Router();
const { auth } = require('express-openid-connect');
require('dotenv').config();
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTHSECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUERBASEURL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(config));

// req.isAuthenticated is provided from the auth router
router.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});




module.exports = router;
