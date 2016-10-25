/* global $ */

function initializeUI () {
  const randomButton = $('.spooky-button.random')
  const spookyMeterImage = $('#spooky-meter').children('img')
  const spookyMeterImageSource = spookyMeterImage.attr('src')
  const title = $('title')
  const spookyDescriptions = ['Not Spooky - It is safe but always be alert for skeletons',
                            'Spoopy - No skeletons nearby but I\'m kind of scared anyway',
                            'P Spoopy - Imminent danger of skeletons',
                            'Spooky - There is a skeleton right behind you look out',
                            '2Spooky - It is too late a skeleton is inside you']

  var spookyLevel = spookyMeterImageSource[spookyMeterImageSource.length - 5]

  randomButton.click(function (event) {
    randomizeSpookyLevel()
    updateSpookyMeterImage()
    updateTitle()
  })

  function randomizeSpookyLevel () {
    spookyLevel = Math.floor(Math.random() * (4 - 0 + 1)) + 0
  }

  function updateSpookyMeterImage (src) {
    if (src) {
      spookyMeterImage.attr('src', src)
      return
    }
    spookyMeterImage.attr('src', '/images/level' + spookyLevel + '.gif')
  }

  function updateTitle (text) {
    if (text) {
      title.html(text)
      return
    }
    title.html(spookyDescriptions[spookyLevel])
  }
}

$(function () {
  initializeUI()
})
