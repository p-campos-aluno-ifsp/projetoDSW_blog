const { blogHome } = require('../controllers/blogHome');

module.exports = {
    blogindex: (app) => {
        app.get('/', function (req, res) {

            blogHome(app, req, res);
        });
    },
}