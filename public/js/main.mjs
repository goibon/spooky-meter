import('./spookyMeter.js')
.then(() => {
  const spookyMeterImage = document.getElementById('spooky-meter')
  const title = document.getElementsByTagName('title')

  function updateSpookyMeterImage (spookyLevel) {
    spookyMeterImage.setAttribute('src', '/images/level' + spookyLevel + '.gif')
  }

  function updateTitle (spookyLevel) {
    title.innerHTML = spookyMeter.getSpookyDescription(spookyLevel)
  }

  window.PullToRefresh.init({
    mainElement: 'body',
    onRefresh: function () {
      const spookyLevel = spookyMeter.getSpookyLevel()
      updateSpookyMeterImage(spookyLevel)
      updateTitle(spookyLevel)
    }
  })
})
