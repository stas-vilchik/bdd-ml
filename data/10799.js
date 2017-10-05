{
  if (isBooleanAttr(key)) {
    if (!isFalsyAttrValue(value)) {
      return " " + key + '="' + key + '"';
    }
  } else if (isEnumeratedAttr(key)) {
    return (
      " " +
      key +
      '="' +
      (isFalsyAttrValue(value) || value === "false" ? "false" : "true") +
      '"'
    );
  } else if (!isFalsyAttrValue(value)) {
    return " " + key + '="' + escape(String(value)) + '"';
  }

  return "";
}
