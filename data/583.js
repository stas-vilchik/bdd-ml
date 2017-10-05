{
  var expires = Date.now() - 60 * 60 * 24 * 7;
  document.cookie
    .split(";")
    .map(function(cookie) {
      return cookie.split("=")[0];
    })
    .forEach(function(name) {
      document.cookie = name + "=; expires=" + new Date(expires).toGMTString();
    });
}
