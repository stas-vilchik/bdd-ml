{
  var baseTag = definition.extends;

  for (var i = 0, a; (a = definition.ancestry[i]); i++) {
    baseTag = a.is && a.tag;
  }

  definition.tag = baseTag || definition.__name;

  if (baseTag) {
    definition.is = definition.__name;
  }
}
