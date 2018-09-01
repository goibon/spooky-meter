const express = require('express')
const spookyMeter = require('./public/js/spookyMeter.js')
const app = express()
app.use(express.static(__dirname))
app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', function (request, response) {
  const spookylevel = spookyMeter.getSpookyLevel()
  response.render('layouts/index', {
    spookylevel: spookylevel,
    title: spookyMeter.getSpookyDescription(spookylevel)
  })
})

app.listen(8080, function () {
  console.log('Spooky-meter listening on port 8080!')
})
