const express = require('express');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var cors = require('cors')
var db = require('./utils/db');
const app = express();

app.use(cors());
app.options('*', cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
//app.use('/uploads', express.static('uploads'));

//app.use('/', userRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res.status(err.status || 500);
  // res.render('error');
});
var port = 4000;
app.listen(port, (res, req)=>{
console.log('Server started at port', port);
})