export default class Watcher {
  constructor (vm, expOrFn) {
    this.getter = expOrFn
    this.value = this.get()
  }

  get () {
    const vm = this.vm
    return this.getter.call(vm, vm)
  }
}