{
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];

        if (value) {
          if (name === "v-for") {
            checkFor(node, 'v-for="' + value + '"', errors);
          } else if (onRE.test(name)) {
            checkEvent(value, name + '="' + value + '"', errors);
          } else {
            checkExpression(value, name + '="' + value + '"', errors);
          }
        }
      }
    }

    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}
