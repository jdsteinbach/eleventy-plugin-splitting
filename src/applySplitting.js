const splitting = require('./splitting')

function applySplitting(content, options) {
  const splitText = splitting( content )
  console.log('splitText inside fn\n', splitText)
  return splitText
}

module.exports = applySplitting
