import { createElement } from '../vdom/create-element'
import { installRenderHelpers } from './render-helpers'

export function initRender (vm) {
  vm._c = (a, b) => createElement(a, b)
}

export function renderMixin (Vue) {
  installRenderHelpers(Vue.prototype)

  Vue.prototype._render = function () {
    const vm = this
    const { render } = vm.$options
    return render.call(vm._renderProxy)
  }
}