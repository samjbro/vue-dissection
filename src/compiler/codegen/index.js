export function generate (ast) {
  const code = genElement(ast, {})
  return {
    render: `with(this){return ${code}}`
  }
}

export function genElement (el) {
  const children = genChildren(el)
  return `_c('${el.tag}'${`,${children}`})`
}

export function genChildren (el) {
  const children = el.children
  if (children.length) {
    const gen = genNode
    return `[${children.map(c => gen(c)).join(',')}]`
  }
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else {
    return genText(node)
  }
}

export function genText (text) {
  return `_v(${text.expression})`
}