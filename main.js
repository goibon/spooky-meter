const express = require('express')
const app = express()
app.use(express.static(__dirname))
app.use(express.static('public'))
app.set('view engine', 'pug')

const spookyDescriptions = ['Not Spooky - It is safe but always be alert for skeletons',
  'Spoopy - No skeletons nearby but I\'m kind of scared anyway',
  'P Spoopy - Imminent danger of skeletons',
  'Spooky - There is a skeleton right behind you look out',
  '2Spooky - It is too late a skeleton is inside you']

app.get('/', function (request, response) {
  var spookylevel = Math.floor(Math.random() * (4 - 0 + 1)) + 0
  response.render('layouts/index', {spookylevel: spookylevel,
    title: spookyDescriptions[spookylevel]})
})

app.listen(8080, function () {
  console.log('Spooky-meter listening on port 8080!')
})
