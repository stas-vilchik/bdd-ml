{
  if (isUndef(vnode)) {
    if (isDef(oldVnode)) {
      invokeDestroyHook(oldVnode);
    }

    return;
  }

  var isInitialPatch = false;
  var insertedVnodeQueue = [];

  if (isUndef(oldVnode)) {
    isInitialPatch = true;
    createElm(vnode, insertedVnodeQueue, parentElm, refElm);
  } else {
    var isRealElement = isDef(oldVnode.nodeType);

    if (!isRealElement && sameVnode(oldVnode, vnode)) {
      patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
    } else {
      if (isRealElement) {
        if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
          oldVnode.removeAttribute(SSR_ATTR);
          hydrating = true;
        }

        if (isTrue(hydrating)) {
          if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
            invokeInsertHook(vnode, insertedVnodeQueue, true);
            return oldVnode;
          } else if (process.env.NODE_ENV !== "production") {
            warn(
              "The client-side rendered virtual DOM tree is not matching " +
                "server-rendered content. This is likely caused by incorrect " +
                "HTML markup, for example nesting block-level elements inside " +
                "<p>, or missing <tbody>. Bailing hydration and performing " +
                "full client-side render."
            );
          }
        }

        oldVnode = emptyNodeAt(oldVnode);
      }

      var oldElm = oldVnode.elm;
      var parentElm$1 = nodeOps.parentNode(oldElm);
      createElm(
        vnode,
        insertedVnodeQueue,
        oldElm._leaveCb ? null : parentElm$1,
        nodeOps.nextSibling(oldElm)
      );

      if (isDef(vnode.parent)) {
        var ancestor = vnode.parent;

        while (ancestor) {
          ancestor.elm = vnode.elm;
          ancestor = ancestor.parent;
        }

        if (isPatchable(vnode)) {
          for (var i = 0; i < cbs.create.length; ++i) {
            cbs.create[i](emptyNode, vnode.parent);
          }
        }
      }

      if (isDef(parentElm$1)) {
        removeVnodes(parentElm$1, [oldVnode], 0, 0);
      } else if (isDef(oldVnode.tag)) {
        invokeDestroyHook(oldVnode);
      }
    }
  }

  invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
  return vnode.elm;
}
