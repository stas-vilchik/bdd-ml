{
  var descr = Object.getOwnPropertyDescriptor(Node.prototype, "nodeType");
  return descr && !descr.get && !descr.set;
}
