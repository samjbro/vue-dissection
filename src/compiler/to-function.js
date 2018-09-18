export function createCompileToFunctionFn (compile) {
  const cache = Object.create(null)

  return function compileToFunctions (template) {
    const compiled = compile(template, {})

    const res = {
      render: new Function(compiled.render)
    }

    return (cache[template] = res)
  }
}