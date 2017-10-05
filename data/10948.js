{
  options = merge(options, decode.options);
  var strict = options.strict;

  if (strict && regexInvalidEntity.test(html)) {
    parseError("malformed character reference");
  }

  return html.replace(regexDecode, function($0, $1, $2, $3, $4, $5, $6, $7) {
    var codePoint;
    var semicolon;
    var decDigits;
    var hexDigits;
    var reference;
    var next;

    if ($1) {
      decDigits = $1;
      semicolon = $2;

      if (strict && !semicolon) {
        parseError("character reference was not terminated by a semicolon");
      }

      codePoint = parseInt(decDigits, 10);
      return codePointToSymbol(codePoint, strict);
    }

    if ($3) {
      hexDigits = $3;
      semicolon = $4;

      if (strict && !semicolon) {
        parseError("character reference was not terminated by a semicolon");
      }

      codePoint = parseInt(hexDigits, 16);
      return codePointToSymbol(codePoint, strict);
    }

    if ($5) {
      reference = $5;

      if (has(decodeMap, reference)) {
        return decodeMap[reference];
      } else {
        if (strict) {
          parseError(
            "named character reference was not terminated by a semicolon"
          );
        }

        return $0;
      }
    }

    reference = $6;
    next = $7;

    if (next && options.isAttributeValue) {
      if (strict && next == "=") {
        parseError("`&` did not start a character reference");
      }

      return $0;
    } else {
      if (strict) {
        parseError(
          "named character reference was not terminated by a semicolon"
        );
      }

      return decodeMapLegacy[reference] + (next || "");
    }
  });
}
