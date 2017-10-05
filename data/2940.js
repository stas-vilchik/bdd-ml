{
  const astral = [];
  let re = "";

  for (let i = 0, at = 0x10000; i < chars.length; i++) {
    const from = chars[i];
    let to = from;

    while (i < chars.length - 1 && chars[i + 1] == to + 1) {
      i++;
      to++;
    }

    if (to <= 0xffff) {
      if (from == to) re += esc(from);
      else if (from + 1 == to) re += esc(from) + esc(to);
      else re += esc(from) + "-" + esc(to);
    } else {
      astral.push(from - at, to - from);
      at = to;
    }
  }

  return {
    nonASCII: re,
    astral: astral
  };
}
