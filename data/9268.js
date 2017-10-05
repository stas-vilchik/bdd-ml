{
  var n = e ? Va(e) : Ba;

  if (n.test(t)) {
    for (var r, i, o = [], a = (n.lastIndex = 0); (r = n.exec(t)); ) {
      (i = r.index) > a && o.push(JSON.stringify(t.slice(a, i)));
      var s = Xe(r[1].trim());
      o.push("_s(" + s + ")"), (a = i + r[0].length);
    }

    return a < t.length && o.push(JSON.stringify(t.slice(a))), o.join("+");
  }
}
