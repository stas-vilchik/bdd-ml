{
  var arguments$1 = arguments;
  var fns = invoker.fns;

  if (Array.isArray(fns)) {
    var cloned = fns.slice();

    for (var i = 0; i < cloned.length; i++) {
      cloned[i].apply(null, arguments$1);
    }
  } else {
    return fns.apply(null, arguments);
  }
}
