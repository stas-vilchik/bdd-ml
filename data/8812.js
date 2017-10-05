{
  var style = normalizeStyleBinding(data.style);
  return data.staticStyle ? extend(data.staticStyle, style) : style;
}
