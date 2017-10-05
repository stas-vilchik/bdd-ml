{
  if (vnode.tag === "select") {
    setSelected(el, binding, vnode.context);
    var prevOptions = el._vOptions;
    var curOptions = (el._vOptions = [].map.call(el.options, getValue));

    if (
      curOptions.some(function(o, i) {
        return !looseEqual(o, prevOptions[i]);
      })
    ) {
      var needReset = el.multiple
        ? binding.value.some(function(v) {
            return hasNoMatchingOption(v, curOptions);
          })
        : binding.value !== binding.oldValue &&
          hasNoMatchingOption(binding.value, curOptions);

      if (needReset) {
        trigger(el, "change");
      }
    }
  }
}
