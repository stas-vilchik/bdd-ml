{
  ("use strict");

  var r = n(2);
  e.exports = r.isStandardBrowserEnv()
    ? (function() {
        return {
          write: function(e, t, n, o, i, s) {
            var u = [];
            u.push(e + "=" + encodeURIComponent(t)),
              r.isNumber(n) && u.push("expires=" + new Date(n).toGMTString()),
              r.isString(o) && u.push("path=" + o),
              r.isString(i) && u.push("domain=" + i),
              s === !0 && u.push("secure"),
              (document.cookie = u.join("; "));
          },
          read: function(e) {
            var t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function(e) {
            this.write(e, "", Date.now() - 864e5);
          }
        };
      })()
    : (function() {
        return {
          write: function() {},
          read: function() {
            return null;
          },
          remove: function() {}
        };
      })();
}
