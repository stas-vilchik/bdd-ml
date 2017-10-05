{
  var r = this.replaceUrls(cssText, urlObj, CSS_URL_REGEXP);
  r = this.replaceUrls(r, urlObj, CSS_IMPORT_REGEXP);
  return r;
}
