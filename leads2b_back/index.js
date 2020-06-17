const express = require('express')
const app = express();
const db = require('./config/db.js');
const consign = require('consign');


consign()
    .include('./config/passport.js')
    .then('./config/middleware.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app);

app.db = db;

app.get('/', (req, res, next) => {
    res.send('Leads2b api');
});


app.listen(3000, () => {
    console.log('Leads2b App is listen on port 3000');
})

module.exports = app