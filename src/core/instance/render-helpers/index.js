import { toString } from 'shared/util'
import { createTextVNode } from 'core/vdom/vnode'

export function installRenderHelpers (target) {
  target._s = toString
  target._v = createTextVNode
}