{
  var inBracket = 1;
  expressionPos = index$1;

  while (!eof()) {
    chr = next();

    if (isStringStart(chr)) {
      parseString(chr);
      continue;
    }

    if (chr === 0x5b) {
      inBracket++;
    }

    if (chr === 0x5d) {
      inBracket--;
    }

    if (inBracket === 0) {
      expressionEndPos = index$1;
      break;
    }
  }
}
