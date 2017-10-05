{
  if (depth === 0) {
    currentBlock = {
      type: tag,
      content: "",
      start: end,
      attrs: attrs.reduce(function(cumulated, ref) {
        var name = ref.name;
        var value = ref.value;
        cumulated[name] = value || true;
        return cumulated;
      }, Object.create(null))
    };

    if (isSpecialTag(tag)) {
      checkAttrs(currentBlock, attrs);

      if (tag === "style") {
        sfc.styles.push(currentBlock);
      } else {
        sfc[tag] = currentBlock;
      }
    } else {
      sfc.customBlocks.push(currentBlock);
    }
  }

  if (!unary) {
    depth++;
  }
}
