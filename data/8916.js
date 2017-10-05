{
  if (!currentParent) {
    {
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
    var expression;

    if (!inVPre && text !== " " && (expression = parseText(text, delimiters))) {
      children.push({
        type: 2,
        expression: expression,
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
