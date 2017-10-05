{
  var script =
    HTMLImports.currentScript ||
    document.currentScript ||
    (document.readyState !== "complete"
      ? document.scripts[document.scripts.length - 1]
      : null);
  return wrap(script);
}
