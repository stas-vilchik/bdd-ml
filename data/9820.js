{
  if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
    vnode.elm = elm;
    vnode.isAsyncPlaceholder = true;
    return true;
  }

  if (process.env.NODE_ENV !== "production") {
    if (!assertNodeMatch(elm, vnode)) {
      return false;
    }
  }

  vnode.elm = elm;
  var tag = vnode.tag;
  var data = vnode.data;
  var children = vnode.children;

  if (isDef(data)) {
    if (isDef((i = data.hook)) && isDef((i = i.init))) {
      i(vnode, true);
    }

    if (isDef((i = vnode.componentInstance))) {
      initComponent(vnode, insertedVnodeQueue);
      return true;
    }
  }

  if (isDef(tag)) {
    if (isDef(children)) {
      if (!elm.hasChildNodes()) {
        createChildren(vnode, children, insertedVnodeQueue);
      } else {
        if (
          isDef((i = data)) &&
          isDef((i = i.domProps)) &&
          isDef((i = i.innerHTML))
        ) {
          if (i !== elm.innerHTML) {
            if (
              process.env.NODE_ENV !== "production" &&
              typeof console !== "undefined" &&
              !bailed
            ) {
              bailed = true;
              console.warn("Parent: ", elm);
              console.warn("server innerHTML: ", i);
              console.warn("client innerHTML: ", elm.innerHTML);
            }

            return false;
          }
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;

          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (
              !childNode ||
              !hydrate(childNode, children[i$1], insertedVnodeQueue)
            ) {
              childrenMatch = false;
              break;
            }

            childNode = childNode.nextSibling;
          }

          if (!childrenMatch || childNode) {
            if (
              process.env.NODE_ENV !== "production" &&
              typeof console !== "undefined" &&
              !bailed
            ) {
              bailed = true;
              console.warn("Parent: ", elm);
              console.warn(
                "Mismatching childNodes vs. VNodes: ",
                elm.childNodes,
                children
              );
            }

            return false;
          }
        }
      }
    }

    if (isDef(data)) {
      for (var key in data) {
        if (!isRenderedModule(key)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
          break;
        }
      }
    }
  } else if (elm.data !== vnode.text) {
    elm.data = vnode.text;
  }

  return true;
}
