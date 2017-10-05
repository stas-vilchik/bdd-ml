{
  document.cookie =
    axios.defaults.xsrfCookieName +
    "=;expires=" +
    new Date(Date.now() - 86400000).toGMTString();
  jasmine.Ajax.uninstall();
}
