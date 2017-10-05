{
  for (var n = 0, r = 0; r < t.length; r++) {
    var i = t[r];

    if (1 === i.type) {
      if (
        ii(i) ||
        (i.ifConditions &&
          i.ifConditions.some(function(t) {
            return ii(t.block);
          }))
      ) {
        n = 2;
        break;
      }

      (e(i) ||
        (i.ifConditions &&
          i.ifConditions.some(function(t) {
            return e(t.block);
          }))) &&
        (n = 1);
    }
  }

  return n;
}
