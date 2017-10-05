{
  var CSS_URL_REGEXP = /(url\()([^)]*)(\))/g;
  var CSS_IMPORT_REGEXP = /(@import[\s]+(?!url\())([^;]*)(;)/g;
  var path = {
    resolveUrlsInStyle: function(style) {
      var doc = style.ownerDocument;
      var resolver = doc.createElement("a");
      style.textContent = this.resolveUrlsInCssText(
        style.textContent,
        resolver
      );
      return style;
    },
    resolveUrlsInCssText: function(cssText, urlObj) {
      var r = this.replaceUrls(cssText, urlObj, CSS_URL_REGEXP);
      r = this.replaceUrls(r, urlObj, CSS_IMPORT_REGEXP);
      return r;
    },
    replaceUrls: function(text, urlObj, regexp) {
      return text.replace(regexp, function(m, pre, url, post) {
        var urlPath = url.replace(/["']/g, "");
        urlObj.href = urlPath;
        urlPath = urlObj.href;
        return pre + "'" + urlPath + "'" + post;
      });
    }
  };
  scope.path = path;
}
