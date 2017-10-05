{
  var action = isFunction ? "accessing the method" : "accessing the property";
  var result = isFunction ? "This is a no-op function" : "This is set to null";
  warn(action, result);
  return getVal;
}
