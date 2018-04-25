module.exports = function (app) {
    var home = app.controllers.home;
    app.get('/', home.index);
    app.post('/login', home.login);
    app.post('/login/new', home.addUser);
    app.get('/logout', home.logout);
};