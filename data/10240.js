{
  if (isDef(parent)) {
    if (isDef(ref$$1)) {
      if (ref$$1.parentNode === parent) {
        nodeOps.insertBefore(parent, elm, ref$$1);
      }
    } else {
      nodeOps.appendChild(parent, elm);
    }
  }
}
