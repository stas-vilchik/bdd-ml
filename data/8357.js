{
  if (el.tag === "slot") {
    el.slotName = getBindingAttr(el, "name");

    if (process.env.NODE_ENV !== "production" && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
          "and can possibly expand into multiple elements. " +
          "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotTarget = getBindingAttr(el, "slot");

    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      addAttr(el, "slot", slotTarget);
    }

    if (el.tag === "template") {
      el.slotScope = getAndRemoveAttr(el, "scope");
    }
  }
}
