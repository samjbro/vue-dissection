import Vue from 'core'
import { mountComponent } from 'core/instance/lifecycle'

Vue.prototype.$mount = function (el) {
  return mountComponent(this, el)
}

export default Vue