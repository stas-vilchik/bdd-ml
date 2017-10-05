{
  if (typeof config === "string") {
    config = utils.merge(
      {
        url: arguments[0]
      },
      arguments[1]
    );
  }

  config = utils.merge(
    defaults,
    this.defaults,
    {
      method: "get"
    },
    config
  );
  config.method = config.method.toLowerCase();
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);
  this.interceptors.request.forEach(function unshiftRequestInterceptors(
    interceptor
  ) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  this.interceptors.response.forEach(function pushResponseInterceptors(
    interceptor
  ) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
}
