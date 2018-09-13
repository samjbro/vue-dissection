/* @flow */

import Vue from './runtime'

const mount = Vue.prototype.$mount
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  console.log({entryRuntimeWithCompilerEL: el})

  return mount.call(this, el, hydrating)
}

export default Vue