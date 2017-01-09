var express = require('express')
var router = express.Router()
var db = require('../db')

module.exports = router

router.get ('/', function (req, res) {
  db.getUsers()
    .then(function (users) {
      res.json(users)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', function (req, res) {
  var id = req.params.id
  db.getUser(id)
  .then(function (users) {
    res.render('index', { users: users })
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.post('/', function (req, res) {
  var user = {
    name:req.body.name,
    email:req.body.email
  }
  db.addUser(user)
    .then(function () {
      res.status(201).send()
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.put('/:id', function (req, res) {
  var id = req.params.id
  var user = {
    name:req.body.name,
    email:req.body.email
  }
  db.updateUser(id, user)
    .then(function() {
      res.status(200).sent()
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
