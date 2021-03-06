{
  var map = {};

  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== "production" &&
      map[attrs[i].name] &&
      !isIE &&
      !isEdge
    ) {
      warn$2("duplicate attribute: " + attrs[i].name);
    }

    map[attrs[i].name] = attrs[i].value;
  }

  return map;
}
