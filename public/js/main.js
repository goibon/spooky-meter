const spookyMeterImage = document.getElementById('spooky-meter')
const spookyMeterImageSource = spookyMeterImage.getAttribute('src')
const title = document.getElementsByTagName('title')
const spookyDescriptions = ['Not Spooky - It is safe but always be alert for skeletons',
  'Spoopy - No skeletons nearby but I\'m kind of scared anyway',
  'P Spoopy - Imminent danger of skeletons',
  'Spooky - There is a skeleton right behind you look out',
  '2Spooky - It is too late a skeleton is inside you']

var spookyLevel = spookyMeterImageSource[spookyMeterImageSource.length - 5]

function randomizeSpookyLevel () {
  spookyLevel = Math.floor(Math.random() * (4 - 0 + 1)) + 0
}

function updateSpookyMeterImage () {
  spookyMeterImage.setAttribute('src', '/images/level' + spookyLevel + '.gif')
}

function updateTitle () {
  title.innerHTML = spookyDescriptions[spookyLevel]
}

window.PullToRefresh.init({
  mainElement: 'body',
  onRefresh: function () {
    randomizeSpookyLevel()
    updateSpookyMeterImage()
    updateTitle()
  }
})
