{
  var action = isFunction ? "setting the method" : "setting the property";
  warn(action, "This is effectively a no-op");
  return val;
}
