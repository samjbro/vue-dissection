export function appendChild (node, child) {
  node.appendChild(child)
}

export function createElement (tagName) {
  return document.createElement(tagName)
}
export function createTextNode (text) {
  return document.createTextNode(text)
}