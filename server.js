var path = require('path')

var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

// var index = require('./routes/index')

var server = express()

var usersRoutes = require('./routes/users')

module.exports = server

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))
server.use(bodyParser.json())

// Routes

server.use('/users', usersRoutes)
