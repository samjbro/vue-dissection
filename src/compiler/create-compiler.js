import { createCompileToFunctionFn } from './to-function'

export function createCompilerCreator (baseCompile) {
  return function createCompiler () {
    function compile (template) {
      return baseCompile(template, {})
    }
    return {
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}