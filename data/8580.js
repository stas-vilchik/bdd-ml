{
  var slots = {};

  if (!children) {
    return slots;
  }

  var defaultSlot = [];

  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;

    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }

    if (
      (child.context === context || child.functionalContext === context) &&
      data &&
      data.slot != null
    ) {
      var name = child.data.slot;
      var slot = slots[name] || (slots[name] = []);

      if (child.tag === "template") {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }

  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }

  return slots;
}
