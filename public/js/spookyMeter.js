(function () {
  let spookyMeter = {}

  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = spookyMeter
  } else if (typeof exports !== 'undefined') {
    exports.spookyMeter = spookyMeter
  } else {
    this.spookyMeter = spookyMeter
  }

  const spookyDescriptions = [
    'Not Spooky - It is safe but always be alert for skeletons',
    'Spoopy - No skeletons nearby but I\'m kind of scared anyway',
    'P Spoopy - Imminent danger of skeletons',
    'Spooky - There is a skeleton right behind you look out',
    '2Spooky - It is too late a skeleton is inside you'
  ]

  spookyMeter.getSpookyLevel = function () {
    return Math.floor(Math.random() * spookyDescriptions.length)
  }

  spookyMeter.getSpookyDescription = function (spookyLevel) {
    spookyLevel = Math.min(spookyLevel, spookyDescriptions.length - 1) || spookyDescriptions.length - 1
    return spookyDescriptions[spookyLevel]
  }
}).call(this || window)
