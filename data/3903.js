{
  const params = {};
  const paramNames = [];
  const api = pathToRegexp(mockUrl, paramNames);
  const captures = reqUrl.match(api).slice(1);

  _.forEach(captures, (c, index) => {
    if (paramNames[index]) {
      params[paramNames[index].name] = c ? util.safeDecodeURIComponent(c) : c;
    }
  });

  return params;
}
