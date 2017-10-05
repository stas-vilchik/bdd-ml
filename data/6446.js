{
  if (typeof chrome !== "undefined" && chrome.app && chrome.app.runtime) {
    return false;
  }

  if (navigator.getDeviceStorage) {
    return false;
  }

  try {
    var f = new Function("return true;");
    return f();
  } catch (ex) {
    return false;
  }
}
