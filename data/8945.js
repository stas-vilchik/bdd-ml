{
  var res = isNative ? "nativeOn:{" : "on:{";

  for (var name in events) {
    var handler = events[name];

    if (
      "development" !== "production" &&
      name === "click" &&
      handler &&
      handler.modifiers &&
      handler.modifiers.right
    ) {
      warn(
        'Use "contextmenu" instead of "click.right" since right clicks ' +
          'do not actually fire "click" events.'
      );
    }

    res += '"' + name + '":' + genHandler(name, handler) + ",";
  }

  return res.slice(0, -1) + "}";
}
