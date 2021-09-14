require('dotenv').config();

var GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
var OKTA_CLIENTID = process.env.OKTA_CLIENTID;
var OKTA_SECRET = process.env.OKTA_SECRET;
var OKTA_DOMAIN = process.env.OKTA_DOMAIN;
var MONGO_URI = process.env.MONGO_URI;
var FONT_KEY = process.env.FONT_KEY;
var SECRET = process.env.SECRET;

module.exports = {
    GOOGLE_API_KEY,
    OKTA_CLIENTID,
    OKTA_DOMAIN,
    OKTA_SECRET,
    MONGO_URI,
    FONT_KEY,
    SECRET
}