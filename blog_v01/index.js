const app = require('./config/server');
const blogRoutes = require('./app/routes/blogRoutes');

blogRoutes.blogindex(app);