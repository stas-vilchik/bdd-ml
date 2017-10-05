{
  var cookie = [];
  cookie.push(name + "=" + encodeURIComponent(value));

  if (utils.isNumber(expires)) {
    cookie.push("expires=" + new Date(expires).toGMTString());
  }

  if (utils.isString(path)) {
    cookie.push("path=" + path);
  }

  if (utils.isString(domain)) {
    cookie.push("domain=" + domain);
  }

  if (secure === true) {
    cookie.push("secure");
  }

  document.cookie = cookie.join("; ");
}
