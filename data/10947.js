{
  var high = $0.charCodeAt(0);
  var low = $0.charCodeAt(1);
  var codePoint = (high - 0xd800) * 0x400 + low - 0xdc00 + 0x10000;
  return escapeCodePoint(codePoint);
}
