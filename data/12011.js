{
  var match = name.match(modifierRE);

  if (match) {
    var ret = {};
    match.forEach(function(m) {
      ret[m.slice(1)] = true;
    });
    return ret;
  }
}
