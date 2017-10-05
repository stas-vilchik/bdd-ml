{
  if (vnode.tag === "select") {
    setSelected(el, binding, vnode.context);
    el._vOptions = [].map.call(el.options, getValue);
  } else if (vnode.tag === "textarea" || isTextInputType(el.type)) {
    el._vModifiers = binding.modifiers;

    if (!binding.modifiers.lazy) {
      el.addEventListener("change", onCompositionEnd);

      if (!isAndroid) {
        el.addEventListener("compositionstart", onCompositionStart);
        el.addEventListener("compositionend", onCompositionEnd);
      }

      if (isIE9) {
        el.vmodel = true;
      }
    }
  }
}
