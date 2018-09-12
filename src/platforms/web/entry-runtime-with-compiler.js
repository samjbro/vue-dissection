/* @flow */

import Vue from './runtime'

const mount = Vue.prototype.$mount
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {


  return mount.call(this, el)
}

export default Vue