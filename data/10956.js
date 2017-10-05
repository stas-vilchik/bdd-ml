{
  endTagLength = endTag.length;

  if (!isPlainTextElement(stackedTag) && stackedTag !== "noscript") {
    text = text
      .replace(/<!--([\s\S]*?)-->/g, "$1")
      .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1");
  }

  if (shouldIgnoreFirstNewline(stackedTag, text)) {
    text = text.slice(1);
  }

  if (options.chars) {
    options.chars(text);
  }

  return "";
}
