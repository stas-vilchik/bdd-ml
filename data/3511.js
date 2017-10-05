{
  const mockUrl = mock.url.replace(/{/g, ":").replace(/}/g, "");
  options.Mock = Mock;
  options._req = this.request;
  options._req.params = getParams(mockUrl, reqUrl);
  options._req.cookies = this.cookies.get.bind(this);
  return options.template.call(options.context.currentContext, options);
}
