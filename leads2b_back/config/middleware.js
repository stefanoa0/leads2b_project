const bodyParser = require('body-parser');


module.exports = app => {
    app.use(bodyParser.json());
    app.use(function (req, res, next) {
        res.setHeader('Allow', 'OPTIONS')
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', ' Content-Type, Access-Control-Allow-Headers, X-Requested-With, Authorization');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });
}