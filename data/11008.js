{
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? "," + el.iterator1 : "";
  var iterator2 = el.iterator2 ? "," + el.iterator2 : "";

  if (
    "development" !== "production" &&
    state.maybeComponent(el) &&
    el.tag !== "slot" &&
    el.tag !== "template" &&
    !el.key
  ) {
    state.warn(
      "<" +
        el.tag +
        ' v-for="' +
        alias +
        " in " +
        exp +
        '">: component lists rendered with ' +
        "v-for should have explicit keys. " +
        "See https://vuejs.org/guide/list.html#key for more info.",
      true
    );
  }

  el.forProcessed = true;
  return (
    (altHelper || "_l") +
    "((" +
    exp +
    ")," +
    "function(" +
    alias +
    iterator1 +
    iterator2 +
    "){" +
    "return " +
    (altGen || genElement)(el, state) +
    "})"
  );
}
