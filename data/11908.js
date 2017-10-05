{
  if (el.for && !el.forProcessed) {
    return genFor(el, state, genSSRElement);
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state, genSSRElement);
  } else if (el.tag === "template" && !el.slotTarget) {
    return el.ssrOptimizability === optimizability.FULL
      ? genChildrenAsStringNode(el, state)
      : genSSRChildren(el, state) || "void 0";
  }

  switch (el.ssrOptimizability) {
    case optimizability.FULL:
      return genStringElement(el, state);

    case optimizability.SELF:
      return genStringElementWithChildren(el, state);

    case optimizability.CHILDREN:
      return genNormalElement(el, state, true);

    case optimizability.PARTIAL:
      return genNormalElement(el, state, false);

    default:
      return genElement(el, state);
  }
}
