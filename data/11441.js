{
  if (plainStringRE.test(value)) {
    value = value.replace(/^'|'$/g, '"');

    if (isEnumeratedAttr(name) && value !== '"false"') {
      value = '"true"';
    }

    return {
      type: RAW,
      value: isBooleanAttr(name)
        ? " " + name + '="' + name + '"'
        : value === '""' ? " " + name : " " + name + "=" + value
    };
  } else {
    return {
      type: EXPRESSION,
      value: "_ssrAttr(" + JSON.stringify(name) + "," + value + ")"
    };
  }
}
