import { parse } from './parser'
import { generate } from './codegen'
import { createCompilerCreator } from './create-compiler'

export const createCompiler = createCompilerCreator(function baseCompile (template) {
  const ast = parse(template.trim())
  const code = generate(ast, {})
  return {
    render: code.render
  }
})