{
  if (!conditions.length) {
    return altEmpty || "_e()";
  }

  var condition = conditions.shift();

  if (condition.exp) {
    return (
      "(" +
      condition.exp +
      ")?" +
      genTernaryExp(condition.block) +
      ":" +
      genIfConditions(conditions, state, altGen, altEmpty)
    );
  } else {
    return "" + genTernaryExp(condition.block);
  }

  function genTernaryExp(el) {
    return altGen
      ? altGen(el, state)
      : el.once ? genOnce(el, state) : genElement(el, state);
  }
}
