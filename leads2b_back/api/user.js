const bcrypt = require('bcrypt');
const datetime = require('moment');
const saltRounds = 10;

module.exports = app => {    
    const save = (req, res) => {
        if (req.body == {}) {
            res.status(400);
            res.send('Request is empty');
            return;
        }
        
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            const password = hash;

            app.db('users')
                .insert({
                    name: req.body.name,
                    email: req.body.email,
                    password: password,
                    create_at: datetime().format()
                })
                .then(_ => res.status(201).send())
                .catch(err => res.status(400).json(err))
        })
    }
    
    return { save }
}