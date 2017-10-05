{
  var args = [],
    len = arguments.length;

  while (len--) args[len] = arguments[len];

  var result = original.apply(this, args);
  var ob = this.__ob__;
  var inserted;

  switch (method) {
    case "push":
    case "unshift":
      inserted = args;
      break;

    case "splice":
      inserted = args.slice(2);
      break;
  }

  if (inserted) {
    ob.observeArray(inserted);
  }

  ob.dep.notify();
  return result;
}
