const defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g

export function parseText (text) {
  const tagRE = defaultTagRE
  const tokens = []
  let match
  while ((match = tagRE.exec(text))) {
    tokens.push(`_s(${match[1]})`)
  }
  return {
    expression: tokens
  }
}