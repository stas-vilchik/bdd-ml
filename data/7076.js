{
  var urlPath = url.replace(/["']/g, "");
  urlObj.href = urlPath;
  urlPath = urlObj.href;
  return pre + "'" + urlPath + "'" + post;
}
