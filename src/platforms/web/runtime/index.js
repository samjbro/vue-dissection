import Vue from 'core/index'
import { mountComponent } from 'core/instance/lifecycle'

import { patch } from './patch'

Vue.prototype.__patch__ = patch

Vue.prototype.$mount = function () {
  return mountComponent(this)
}

export default Vue