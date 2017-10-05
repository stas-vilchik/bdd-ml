{
  var el = document.activeElement;

  if (el && el.vmodel) {
    trigger(el, "input");
  }
}
