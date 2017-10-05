{
  var path = [];

  while (inst) {
    path.push(inst);
    inst = getParent(inst);
  }

  var i;

  for (i = path.length; i-- > 0; ) {
    fn(path[i], "captured", arg);
  }

  for (i = 0; i < path.length; i++) {
    fn(path[i], "bubbled", arg);
  }
}
