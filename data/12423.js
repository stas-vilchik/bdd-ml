{
  vnode.isRootInsert = !nested;

  if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
    return;
  }

  var data = vnode.data;
  var children = vnode.children;
  var tag = vnode.tag;

  if (isDef(tag)) {
    if (process.env.NODE_ENV !== "production") {
      if (data && data.pre) {
        inPre++;
      }

      if (
        !inPre &&
        !vnode.ns &&
        !(
          config.ignoredElements.length &&
          config.ignoredElements.indexOf(tag) > -1
        ) &&
        config.isUnknownElement(tag)
      ) {
        warn(
          "Unknown custom element: <" +
            tag +
            "> - did you " +
            "register the component correctly? For recursive components, " +
            'make sure to provide the "name" option.',
          vnode.context
        );
      }
    }

    vnode.elm = vnode.ns
      ? nodeOps.createElementNS(vnode.ns, tag)
      : nodeOps.createElement(tag, vnode);
    setScope(vnode);
    {
      var appendAsTree = isDef(data) && isTrue(data.appendAsTree);

      if (!appendAsTree) {
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }

        insert(parentElm, vnode.elm, refElm);
      }

      createChildren(vnode, children, insertedVnodeQueue);

      if (appendAsTree) {
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }

        insert(parentElm, vnode.elm, refElm);
      }
    }

    if (process.env.NODE_ENV !== "production" && data && data.pre) {
      inPre--;
    }
  } else if (isTrue(vnode.isComment)) {
    vnode.elm = nodeOps.createComment(vnode.text);
    insert(parentElm, vnode.elm, refElm);
  } else {
    vnode.elm = nodeOps.createTextNode(vnode.text);
    insert(parentElm, vnode.elm, refElm);
  }
}
