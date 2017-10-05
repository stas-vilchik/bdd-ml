{
  if (val === null || typeof val === "undefined") {
    return;
  }

  if (utils.isArray(val)) {
    key = key + "[]";
  }

  if (!utils.isArray(val)) {
    val = [val];
  }

  utils.forEach(val, function parseValue(v) {
    if (utils.isDate(v)) {
      v = v.toISOString();
    } else if (utils.isObject(v)) {
      v = JSON.stringify(v);
    }

    parts.push(encode(key) + "=" + encode(v));
  });
}
