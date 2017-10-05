{
  var stylesheet = context.$options.style || {};
  return stylesheet["@TRANSITION"] && stylesheet["@TRANSITION"][moveClass];
}
