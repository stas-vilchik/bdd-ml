{
  actuallySetSelected(el, binding, vm);

  if (isIE || isEdge) {
    setTimeout(function() {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}
