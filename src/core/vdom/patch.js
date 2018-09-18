
function isDef (v) {
  return v !== undefined && v !== null
}

export function createPatchFunction (backend) {
  const { nodeOps } = backend

  function createElm (vnode, insertedVnodeQueue, parentElm) {
    const children = vnode.children
    const tag = vnode.tag
    if (isDef(tag)) {
      vnode.elm = vnode.ns
        ? null
        : nodeOps.createElement(tag)
      createChildren(vnode, children, insertedVnodeQueue)
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text)
    }
    insert(parentElm, vnode.elm)
  }

  function insert (parent, elm) {
    if (isDef(parent)) {
      nodeOps.appendChild(parent, elm)
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    for (let i = 0; i < children.length; ++i) {
      createElm(children[i], insertedVnodeQueue, vnode.elm)
    }
  }

  return function patch (vnode) {
    createElm(vnode, [])
    return vnode.elm
  }
}