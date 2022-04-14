var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'EaToNMaTiAs',
  resave: false,
  saveUninitialized: true,
  originalUrl: '/admin/login'
}));

app.use(function(req, res, next){
  if(!req.session.vistas){
    req.session.vistas = {};
  }

  if(!req.session.vistas[req.originalUrl]){
    req.session.vistas[req.originalUrl] = 1 ;
    }else{
      req.session.vistas[req.originalUrl]++;
    }
    next();
});

app.get('/', function(req, res){
  var conocido = Boolean(req.session.nombre);

  res.render('index', {
    title: 'Sesiones en Express.js',
    conocido: conocido,
    nombre: req.session.nombre,
    vistas: req.session.vistas[req.originalUrl]
  });
});

app.get('/admin/login', function(req, res){
  res.render('admin/layout', {
    nombre: req.session.nombre,
    vistas: req.session.vistas[req.originalUrl]
  });
});

app.post('/ingresar', function(req,res){
  if(req.body.nombre){
    req.session.nombre = req.body.nombre
  }
  res.redirect('/admin/login'); 
});

app.get('/volver', function(req,res){
  req.session.destroy();
  res.redirect('/');
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
