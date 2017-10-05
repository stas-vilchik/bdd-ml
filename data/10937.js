{
  var output = "";

  if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
    if (strict) {
      parseError("character reference outside the permissible Unicode range");
    }

    return "\uFFFD";
  }

  if (has(decodeMapNumeric, codePoint)) {
    if (strict) {
      parseError("disallowed character reference");
    }

    return decodeMapNumeric[codePoint];
  }

  if (strict && contains(invalidReferenceCodePoints, codePoint)) {
    parseError("disallowed character reference");
  }

  if (codePoint > 0xffff) {
    codePoint -= 0x10000;
    output += stringFromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
    codePoint = 0xdc00 | (codePoint & 0x3ff);
  }

  output += stringFromCharCode(codePoint);
  return output;
}
