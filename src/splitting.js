require('undom/register')

const splitting = text => {
  splitElement = document.createElement('span')
  splitElement.innerHTML = text

  const str = splitElement.innerHTML

  const words = str.split(' ')
  const chars = str.split('')

  // Remove the existing text so it can .be replaced by the characters in spans
  splitElement.innerHTML = ''

  // Set up an aria-label so screen readers will still read out the whole string
  splitElement.setAttribute('aria-label', str)

  chars.forEach(function (item, index) {
    var c = document.createElement('span')
    c.style = { '--split-char': index }

    // and give it some content
    var letter = document.createTextNode(item)

    // add the text node to the newly created div
    c.appendChild(letter)

    // add the newly created element and its content into the DOM
    splitElement.append(c)

    // Add aria-hidden to each character if the aria-label has been applied to the parent
    if (c.parentElement.getAttribute('aria-label')) {
      c.setAttribute('aria-hidden', true)
    }
  })
}

module.exports = splitting
