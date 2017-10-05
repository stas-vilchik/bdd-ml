{
  for (var e = "", n = 0; n < t.length; n++) {
    var r = t[n];
    e += '"' + r.name + '":' + fi(r.value) + ",";
  }

  return e.slice(0, -1);
}
