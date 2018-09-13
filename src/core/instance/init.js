import { mergeOptions } from '../util'

export function initMixin (Vue: Class<Component>) {
  Vue.prototype._init = function (options?: Object) {
    const vm: Component = this

    vm.$options = mergeOptions()
    console.log('WEEABOO')
  }
}