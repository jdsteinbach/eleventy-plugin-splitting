const enc = s => s.replace(/[&'"<>]/g, a => `&#${a.codePointAt(0)};`)
const attr = a => ` ${a.name}="${enc(a.value)}"`
const css = s => {
  return Object.keys(s).length ? ` style="${Object.keys(s).map(property => `${property}: ${s[property]}`).join(';')}"` : ''
}

const serialize = el => {
  if (el.nodeType === 3) return enc(el.nodeValue)

  const nodeName = el.nodeName.toLowerCase()
  const attrs = el.attributes.map(attr).join('')
  const children = el.childNodes.map(serialize).join('')
  const style = css(el.style)

  return `<${nodeName}${attrs}${style}>${children}</${nodeName}>`
}

module.exports = {
  serialize
}
