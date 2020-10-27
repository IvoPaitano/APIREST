const express = require('express'); //      REQUIRE         express
const path = require('path'); //                            path
const morgan = require('morgan'); //                        morgan
const mysql = require('mysql'); //                          mysql
const myConnection = require('express-myconnection'); //    exress-myConnection

const app = express(); //    start express

//  import routes
const warrriorsRoutes = require('./routes/warriors');
const warrriorsRoutesAPI = require('./routes/API/warriorsAPI');

//  settings
app.set('port', process.env.PORT || 3000); //   default port or 3000;
app.set('view engine', 'pug'); //   define template engine
app.set('views', path.join(__dirname, 'views')); //     DIRNAME :address where it runs

//  middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password : '',
    port : 3306,
    database : 'guerrerosz'
}, 'single'));

app.use(express.urlencoded({extended: false}));
app.use(express.json())

//  routes
app.use('/',warrriorsRoutes);
app.use('/api',warrriorsRoutesAPI);

//  static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), ()=>{
    console.log('Server on port 3000');
}) //    start server