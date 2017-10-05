{
  options = merge(options, encode.options);
  var strict = options.strict;

  if (strict && regexInvalidRawCodePoint.test(string)) {
    parseError("forbidden code point");
  }

  var encodeEverything = options.encodeEverything;
  var useNamedReferences = options.useNamedReferences;
  var allowUnsafeSymbols = options.allowUnsafeSymbols;
  var escapeCodePoint = options.decimal ? decEscape : hexEscape;

  var escapeBmpSymbol = function(symbol) {
    return escapeCodePoint(symbol.charCodeAt(0));
  };

  if (encodeEverything) {
    string = string.replace(regexAsciiWhitelist, function(symbol) {
      if (useNamedReferences && has(encodeMap, symbol)) {
        return "&" + encodeMap[symbol] + ";";
      }

      return escapeBmpSymbol(symbol);
    });

    if (useNamedReferences) {
      string = string
        .replace(/&gt;\u20D2/g, "&nvgt;")
        .replace(/&lt;\u20D2/g, "&nvlt;")
        .replace(/&#x66;&#x6A;/g, "&fjlig;");
    }

    if (useNamedReferences) {
      string = string.replace(regexEncodeNonAscii, function(string) {
        return "&" + encodeMap[string] + ";";
      });
    }
  } else if (useNamedReferences) {
    if (!allowUnsafeSymbols) {
      string = string.replace(regexEscape, function(string) {
        return "&" + encodeMap[string] + ";";
      });
    }

    string = string
      .replace(/&gt;\u20D2/g, "&nvgt;")
      .replace(/&lt;\u20D2/g, "&nvlt;");
    string = string.replace(regexEncodeNonAscii, function(string) {
      return "&" + encodeMap[string] + ";";
    });
  } else if (!allowUnsafeSymbols) {
    string = string.replace(regexEscape, escapeBmpSymbol);
  }

  return string
    .replace(regexAstralSymbols, function($0) {
      var high = $0.charCodeAt(0);
      var low = $0.charCodeAt(1);
      var codePoint = (high - 0xd800) * 0x400 + low - 0xdc00 + 0x10000;
      return escapeCodePoint(codePoint);
    })
    .replace(regexBmpWhitelist, escapeBmpSymbol);
}
