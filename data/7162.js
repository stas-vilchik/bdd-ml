{
  isPendingMutations = false;
  var $p = pendingMutations;

  for (var i = 0, l = $p.length, p; i < l && (p = $p[i]); i++) {
    p();
  }

  pendingMutations = [];
}
