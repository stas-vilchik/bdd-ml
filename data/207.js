{
  ("use strict");

  function n() {
    this.message = "String contains an invalid character";
  }

  function r(e) {
    for (
      var t, r, i = String(e), s = "", u = 0, a = o;
      i.charAt(0 | u) || ((a = "="), u % 1);
      s += a.charAt(63 & (t >> (8 - (u % 1) * 8)))
    ) {
      if (((r = i.charCodeAt((u += 0.75))), r > 255)) throw new n();
      t = (t << 8) | r;
    }

    return s;
  }

  var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  (n.prototype = new Error()),
    (n.prototype.code = 5),
    (n.prototype.name = "InvalidCharacterError"),
    (e.exports = r);
}
