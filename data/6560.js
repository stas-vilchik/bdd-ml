{
  if (supportsEventConstructors)
    return new OriginalEvent(type, unwrapOptions(options));
  var event = unwrap(document.createEvent(name));
  var defaultDict = defaultInitDicts[name];
  var args = [type];
  Object.keys(defaultDict).forEach(function(key) {
    var v = options != null && key in options ? options[key] : defaultDict[key];
    if (key === "relatedTarget") v = unwrap(v);
    args.push(v);
  });
  event["init" + name].apply(event, args);
  return event;
}
