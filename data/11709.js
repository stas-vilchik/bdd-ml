{
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];

    if (attr.name === "lang") {
      block.lang = attr.value;
    }

    if (attr.name === "scoped") {
      block.scoped = true;
    }

    if (attr.name === "module") {
      block.module = attr.value || true;
    }

    if (attr.name === "src") {
      block.src = attr.value;
    }
  }
}
