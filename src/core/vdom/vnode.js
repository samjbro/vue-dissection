export default class VNode {
  constructor (tag, data, children, text) {
    this.tag = tag
    this.children = children
    this.text = text
  }
}

export function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

