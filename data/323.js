{
  if (utils.isDate(v)) {
    v = v.toISOString();
  } else if (utils.isObject(v)) {
    v = JSON.stringify(v);
  }

  parts.push(encode(key) + "=" + encode(v));
}
