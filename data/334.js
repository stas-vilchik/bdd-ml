{
  var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
  return (
    parsed.protocol === originURL.protocol && parsed.host === originURL.host
  );
}
