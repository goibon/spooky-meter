const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
app.use(express.static(__dirname))
app.use(express.static('public'))
app.engine('handlebars', exphbs({defaultLayout: 'index'}))
app.set('view engine', 'handlebars')

const spookyDescriptions = ['Not Spooky - It is safe but always be alert for skeletons',
  'Spoopy - No skeletons nearby but I\'m kind of scared anyway',
  'P Spoopy - Imminent danger of skeletons',
  'Spooky - There is a skeleton right behind you look out',
  '2Spooky - It is too late a skeleton is inside you']

const lessButtonText = 'Less Spooky'
const randomButtonText = 'Random Spooky Level'
const moreButtonText = 'Spookier'

app.get('/', function (request, response) {
  var spookylevel = Math.floor(Math.random() * (4 - 0 + 1)) + 0
  response.render('spookymeter', {spookylevel: spookylevel,
    title: spookyDescriptions[spookylevel],
    lessButtonText: lessButtonText,
    randomButtonText: randomButtonText,
    moreButtonText: moreButtonText})
})

app.listen(8080, function () {
  console.log('Spooky-meter listening on port 8080!')
})
