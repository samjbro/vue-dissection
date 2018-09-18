const ncname = `[a-zA-Z_][\\w\\-\\.]*`
const qnameCapture = `((?:${ncname}\\:)?${ncname})`
const startTagOpen = new RegExp(`^<${qnameCapture}`)
const startTagClose = /^\s*(\/?)>/
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`)

export function parseHTML (html, options) {
  let index = 0
  while (html) {
    const textEnd = html.indexOf('<')
    if (textEnd === 0) {
      const endTagMatch = html.match(endTag)
      if (endTagMatch) {
        advance(endTagMatch[0].length)
        continue
      }

      const startTagMatch = parseStartTag()
      if (startTagMatch) {
        handleStartTag(startTagMatch)
        continue
      }
    }
    let text
    if (textEnd >=0) {
      text = html.substring(0, textEnd)
      advance(textEnd)
    }

    if (options.chars && text) {
      options.chars(text)
    }
  }

  function advance (n) {
    index += n
    html = html.substring(n)
  }

  function parseStartTag () {
    const start = html.match(startTagOpen)
    if (start) {
      const match = {
        tagName: start[1]
      }
      advance(start[0].length)
      const end = html.match(startTagClose)
      advance(end[0].length)
      return match
    }
  }

  function handleStartTag (match) {
    const tagName = match.tagName
    if (options.start) {
      options.start(tagName)
    }
  }
}