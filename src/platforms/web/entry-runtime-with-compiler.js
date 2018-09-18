import Vue from './runtime/index'
import { compileToFunctions } from './compiler/index'

const mount = Vue.prototype.$mount
Vue.prototype.$mount = function (el) {
  const options = this.$options
  const template = el.outerHTML
  const { render } = compileToFunctions(template)
  options.render = render
  return mount.call(this, el)
}

export default Vue