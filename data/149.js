{
  if (null !== e && "undefined" != typeof e)
    if (("object" == typeof e || r(e) || (e = [e]), r(e)))
      for (var n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e);
    else
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
}
