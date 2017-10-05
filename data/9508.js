{
  return str.replace(camelizeRE, function(_, c) {
    return c ? c.toUpperCase() : "";
  });
}
