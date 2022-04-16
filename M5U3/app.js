var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


var pool = require('./models/bd'); // Toma el requierimiento de la base de datos
const { isBigIntObject } = require('util/support/types');

//select

pool.query('select * from empleados').then(function(resultados){
  console.log(resultados)
});

//Acá empiezan todas las consultas

//Insert un empleado aleatorio

var obj = {
  Nombre: 'Ernesto',
  Apellido: 'Gonzalez',
  Trabajo: 'Programador',
  Edad: '23',
  Salario: '70000',
  Mail: 'egonzalez@bignet.com'
}

pool.query('insert into empleados set ?', [obj] ).then(function(resultados)
{
  console.log(resultados);
});

//Agregar datos en "Hernan Rosso" con Update

var id_emp = 9;
var obj = {
  Trabajo: 'Programador',
  Edad: '33',
  Salario: '90000',
  Mail: 'hrosso@bignet.com'
}

pool.query('update empleados set ? where id_emp=?', [obj, id_emp] ).then(function(resultados)
{
  console.log(resultados);
});

//Borrar un empleado

var id = 23;

pool.query('delete from empleados where id_emp=?', [id]).then(function(resultados){
  console.log(resultados);
})


pool.query('select * from empleados').then(function(resultados){
  console.log(resultados)
});
// Hasta acá todas las consultas

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
