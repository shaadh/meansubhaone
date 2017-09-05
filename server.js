var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

//var port = 3000;
var app = express();

// View Engine
// app.set('views', path.join(__dirname, 'views'));
// app.set('views', path.join(__dirname, '../frontend'));
app.use(express.static(path.resolve(__dirname, "www")));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
// app.use(express.static(path.join(__dirname, '../frontend')));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// route 
app.use('/', index);
app.use('/api', tasks);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log("listening to Port", app.get("port"));
});

// app.listen(port, function() {
//     console.log('Server started on port' + port);
// });