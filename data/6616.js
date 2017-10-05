{
  if (wrapper.firstChild_ !== undefined) {
    var child = wrapper.firstChild_;

    while (child) {
      var tmp = child;
      child = child.nextSibling_;
      tmp.parentNode_ = tmp.previousSibling_ = tmp.nextSibling_ = undefined;
    }
  }

  wrapper.firstChild_ = wrapper.lastChild_ = undefined;
}
