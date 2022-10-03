const dbConnection = require('../../config/dbConnBlog');
const { blogHome } = require('../models/blogHome');

module.exports = {
    blogHome: (app, req, res) => {
        
        console.log('[Controller BlOG Home]');
        dbConn = dbConnection();
        blogHome(dbConn, (error, result) => {
            console.log('error ===', error);
            console.log('result ===', result);
            res.render('blogHome.ejs', { postagens: result });          
        })
    },
}