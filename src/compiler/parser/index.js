import { parseHTML } from './html-parser'
import { parseText } from './text-parser'

export function createASTElement (tag) {
  return {
    type: 1,
    tag,
    children: []
  }
}

export function parse (template) {
  const stack = []
  let root
  let currentParent

  parseHTML(template, {
    start (tag) {
      const element = createASTElement(tag)
      if (!root) {
        root = element
      }
      if (currentParent) {
        currentParent.children.push(element)
        element.parent = currentParent
      }
      currentParent = element
      stack.push(element)
    },

    chars (text) {
      const children = currentParent.children
      let res
      if (res = parseText(text)) {
        children.push({
          expression: res.expression
        })
      }
    }
  })
  return root
}