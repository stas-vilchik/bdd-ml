{
  return str
    .replace(classifyRE, function(c) {
      return c.toUpperCase();
    })
    .replace(/[-_]/g, "");
}
