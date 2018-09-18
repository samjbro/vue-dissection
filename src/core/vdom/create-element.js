import VNode from './vnode'

export function createElement (tag, data) {
  const children = data
  return new VNode(tag, data, children)
}
