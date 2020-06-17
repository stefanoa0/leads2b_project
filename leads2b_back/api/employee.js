const datetime = require('moment');


module.exports = app => {
    
    const getEmployees = (req, res) => {
        app.db('employees')
            .where('delete_at', 'is', null)
            .then(employees => res.status(200).json(employees))
            .catch(err => res.status(500).json(err))
    }
    
    const get = (req, res) => {
        app.db('employees')
            .where('delete_at', 'is', null)
            .where('id', req.params.id)
            .first()
            .then(employee => res.status(200).json(employee))
            .catch(err => res.status(500).json(err))
    }
    
    const save = (req, res) => {
        validateRequest(req, res);
        app.db('employees')
            .insert({
                name: req.body.name,
                email: req.body.email,
                register_number: req.body.register_number,
                create_at: datetime().format(),
            })
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).json(err))
    }
    
    const validateRequest = (req, res) => {
        if (!req.body.name) {
            return res.status(400).send("The Employee's name is required");
        }
        if (!req.body.email) {
            return res.status(400).send("The Employee's email is required");
        }
        if (!req.body.register_number) {
            return res.status(400).send("The Employee's register number is required");
        }
    }
    
    const remove = (req, res) => {
        app.db('employees')
            .where({ id: req.params.id })
            .update({ delete_at: datetime().format() })
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).json(err))
    }
    
    const update = (req, res) => {
        app.db('employees')
            .where({ id: req.params.id })
            .update({
                name: req.body.name,
                email: req.body.email,
                register_number: req.body.register_number
            })
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).json(err))
    }
    
    return {
        getEmployees,
        save,
        remove,
        update,
        get
    }
}