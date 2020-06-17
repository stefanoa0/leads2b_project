module.exports = app => {
    app_api = app.api;
    
    app.post('/signup', app_api.user.save);
    app.post('/signin', app_api.authenticate.signin);
    app.post('/validate_login', app_api.authenticate.validate_login)

    app.route('/employees')
        .get(app.config.passport.authenticate())
        .post(app.config.passport.authenticate())
        .get(app_api.employee.getEmployees)
        .post(app_api.employee.save);
    
    app.route('/employee/:id')
        .get(app.config.passport.authenticate())
        .post(app.config.passport.authenticate())
        .delete(app.config.passport.authenticate())
        .put(app.config.passport.authenticate())
        .get(app_api.employee.get)
        .delete(app_api.employee.remove)
        .put(app_api.employee.update);
    
}