import { initRender } from './render'
import { initState } from './state'
import { mergeOptions } from '../util'

export function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    const vm = this
    vm.$options = mergeOptions(
      vm.constructor.options,
      options
    )
    vm._renderProxy = vm

    initRender(vm)
    initState(vm)

    vm.$mount(vm.$options.el)
  }
}