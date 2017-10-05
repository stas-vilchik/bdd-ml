{
  return text.replace(regexp, function(m, pre, url, post) {
    var urlPath = url.replace(/["']/g, "");
    urlObj.href = urlPath;
    urlPath = urlObj.href;
    return pre + "'" + urlPath + "'" + post;
  });
}
