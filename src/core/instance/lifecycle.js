import Watcher from '../observer/watcher'

export function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode) {
    const vm = this
    vm.$el = vm.__patch__(vnode)
  }
}

export function mountComponent (vm) {
  const updateComponent = () => {
    vm._update(vm._render())
  }

  new Watcher(vm, updateComponent)
}