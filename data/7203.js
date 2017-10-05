{
  var p = obj;

  while (p) {
    if (p === ctor.prototype) {
      return true;
    }

    p = p.__proto__;
  }

  return false;
}
