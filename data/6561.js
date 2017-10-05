{
  var v = options != null && key in options ? options[key] : defaultDict[key];
  if (key === "relatedTarget") v = unwrap(v);
  args.push(v);
}
