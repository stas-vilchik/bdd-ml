{
  var reactName = original.replace(CAMELIZE, capitalize);
  SVGDOMPropertyConfig.Properties[reactName] = 0;
  SVGDOMPropertyConfig.DOMAttributeNames[reactName] = original;
}
