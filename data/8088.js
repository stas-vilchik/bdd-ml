{
  var scopedSlotFn = this.$scopedSlots[name];

  if (scopedSlotFn) {
    props = props || {};

    if (bindObject) {
      props = extend(extend({}, bindObject), props);
    }

    return scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];

    if (slotNodes && process.env.NODE_ENV !== "production") {
      slotNodes._rendered &&
        warn(
          'Duplicate presence of slot "' +
            name +
            '" found in the same render tree ' +
            "- this will likely cause render errors.",
          this
        );
      slotNodes._rendered = true;
    }

    return slotNodes || fallback;
  }
}
