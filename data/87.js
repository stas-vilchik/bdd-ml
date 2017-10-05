{
  var str = String(input);
  var output = "";

  for (
    var block, charCode, idx = 0, map = chars;
    str.charAt(idx | 0) || ((map = "="), idx % 1);
    output += map.charAt(63 & (block >> (8 - (idx % 1) * 8)))
  ) {
    charCode = str.charCodeAt((idx += 3 / 4));

    if (charCode > 0xff) {
      throw new E();
    }

    block = (block << 8) | charCode;
  }

  return output;
}
