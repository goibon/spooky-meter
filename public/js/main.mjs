import('./spookyMeter.js')
.then(() => {
  const spookyMeterImage = document.getElementById('spooky-meter')
  const spookyMeterImageSource = spookyMeterImage.getAttribute('src')
  const title = document.getElementsByTagName('title')

  var spookyLevel = spookyMeterImageSource[spookyMeterImageSource.length - 5]

  function randomizeSpookyLevel () {
    spookyLevel = spookyMeter.getSpookyLevel()
  }

  function updateSpookyMeterImage () {
    spookyMeterImage.setAttribute('src', '/images/level' + spookyLevel + '.gif')
  }

  function updateTitle () {
    title.innerHTML = spookyMeter.getSpookyDescription(spookyLevel)
  }

  window.PullToRefresh.init({
    mainElement: 'body',
    onRefresh: function () {
      randomizeSpookyLevel()
      updateSpookyMeterImage()
      updateTitle()
    }
  })
})
