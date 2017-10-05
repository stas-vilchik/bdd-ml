{
  str = val;
  len = str.length;
  index$1 = expressionPos = expressionEndPos = 0;

  if (val.indexOf("[") < 0 || val.lastIndexOf("]") < len - 1) {
    return {
      exp: val,
      idx: null
    };
  }

  while (!eof()) {
    chr = next();

    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5b) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.substring(0, expressionPos),
    idx: val.substring(expressionPos + 1, expressionEndPos)
  };
}
