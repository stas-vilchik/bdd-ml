{
  for (; startIdx <= endIdx; ++startIdx) {
    var ch = vnodes[startIdx];

    if (isDef(ch)) {
      if (isDef(ch.tag)) {
        removeAndInvokeRemoveHook(ch);
        invokeDestroyHook(ch);
      } else {
        removeNode(ch.elm);
      }
    }
  }
}
