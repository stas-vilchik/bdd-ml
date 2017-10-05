{
  jasmine.Ajax.uninstall();
  delete axios.defaults.baseURL;
  delete axios.defaults.headers.get["X-CUSTOM-HEADER"];
  delete axios.defaults.headers.post["X-CUSTOM-HEADER"];
  document.cookie =
    XSRF_COOKIE_NAME +
    "=;expires=" +
    new Date(Date.now() - 86400000).toGMTString();
}
