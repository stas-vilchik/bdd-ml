{
  o.isDate(e)
    ? (e = e.toISOString())
    : o.isObject(e) && (e = JSON.stringify(e)),
    s.push(r(t) + "=" + r(e));
}
