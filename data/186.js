{
  "undefined" == typeof p && "content-type" === t.toLowerCase()
    ? delete d[t]
    : l.setRequestHeader(t, e);
}
