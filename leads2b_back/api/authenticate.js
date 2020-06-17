const { authSecret } = require('../.env');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt');

module.exports = app => {
    
    const signin = async (req, res) => {
        if (!validateRequestBody(req.body)) {
            return res.status(400).send('Incomplete Data');
        }
            
        const user = await app.db('users')
            .where({ email: req.body.email })
            .first()
            .catch(err => res.status(400).json(err));
        
        if (!user) {
            return res.status(404);
        }
        
        const isMatch = await bcrypt.compare(req.body.password, user.password);

        if (!isMatch) {
            return res.status(401).send();
        }
        const payload = { id: user.id };
        res.json({
            name: user.name,
            email: user.email,
            token: jwt.encode(payload, authSecret)
        });
        
    }
    
    function validateRequestBody(request_body) {
        var result = true;
        if (!request_body.email || !request_body.password) {
            result = false;
        }
        return result;
    }
    
    const validate_login = async (req, res) => {
        const user = await app.db('users')
            .where({ id: req.body.id })
            .first()
            .catch(err => res.status(400).json(err));
        
        if (!user) {
            return res.status(404);
        }
        const payload = { id: user.id };
        const decoded = await jwt.decode(req.body.token, authSecret);
        
        if (decoded && decoded.id == payload.id) {
            return res.status(200).send({token: true});
        }
        
        return res.status(500);
    }
    
    return {
        signin,
        validate_login
    };
}