const splitting = require('./splitting')

function applySplitting(content, options) {
  const splitText = splitting( content )

  return splitText
}

module.exports = applySplitting
