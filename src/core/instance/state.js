export function initState (vm) {
  vm._watchers = []
  initData(vm)
}
const sharedPropertyDefinition = {}

export function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}

function initData (vm) {
  const data = vm.$options.data
  vm._data = data

  const keys = Object.keys(data)
  let i = keys.length
  while (i--) {
    const key = keys[i]
    proxy(vm, `_data`, key)
  }
}