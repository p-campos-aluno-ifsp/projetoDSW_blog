console.log('[Config] Server');
let express = require('express');
//let expressSession = require('express-session');
let app = express(); 
let port = 3000;

app.set('view engine', 'ejs');
app.set('views', './app/views');
//console.log(__dirname);
app.use(express.static('./public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, function(){
	console.log('Servidor rodando com express na porta', port);
});

module.exports = app;
