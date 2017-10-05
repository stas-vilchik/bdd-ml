{
  var inBracket = 1;
  expressionPos = index;

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
      expressionEndPos = index;
      break;
    }
  }
}
