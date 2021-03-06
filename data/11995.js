{
  if (!currentParent) {
    if (process.env.NODE_ENV !== "production") {
      if (text === template) {
        warnOnce(
          "Component template requires a root element, rather than just text."
        );
      } else if ((text = text.trim())) {
        warnOnce('text "' + text + '" outside root element will be ignored.');
      }
    }

    return;
  }

  if (
    isIE &&
    currentParent.tag === "textarea" &&
    currentParent.attrsMap.placeholder === text
  ) {
    return;
  }

  var children = currentParent.children;
  text =
    inPre || text.trim()
      ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
      : preserveWhitespace && children.length ? " " : "";

  if (text) {
    var res;

    if (!inVPre && text !== " " && (res = parseText(text, delimiters))) {
      children.push({
        type: 2,
        expression: res.expression,
        tokens: res.tokens,
        text: text
      });
    } else if (
      text !== " " ||
      !children.length ||
      children[children.length - 1].text !== " "
    ) {
      children.push({
        type: 3,
        text: text
      });
    }
  }
}
