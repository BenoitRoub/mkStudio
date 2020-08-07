const jwt = require("express-jwt");
require("dotenv").config();

const auth = jwt({
  secret: process.env.JWT_SECRET,
  credentialsRequired: false,
  getToken: function getToken(req, connection) {
    return req.headers.token;
  },
  algorithms: ["HS256"],
});

module.exports = auth;
