const spookyDescriptions = [
  'Not Spooky - It is safe but always be alert for skeletons',
  'Spoopy - No skeletons nearby but I\'m kind of scared anyway',
  'P Spoopy - Imminent danger of skeletons',
  'Spooky - There is a skeleton right behind you look out',
  '2Spooky - It is too late a skeleton is inside you'
]

exports.getSpookyLevel = function () {
  return Math.floor(Math.random() * spookyDescriptions.length)
}

exports.getSpookyDescription = function (spookyLevel) {
  spookyLevel = Math.min(spookyLevel, spookyDescriptions.length - 1) || spookyDescriptions.length - 1
  return spookyDescriptions[spookyLevel]
}
