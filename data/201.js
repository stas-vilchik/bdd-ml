{
  (o = e.indexOf(":")),
    (t = r.trim(e.substr(0, o)).toLowerCase()),
    (n = r.trim(e.substr(o + 1))),
    t && (i[t] = i[t] ? i[t] + ", " + n : n);
}
