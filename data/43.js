{
  Axios.prototype[method] = function(url, config) {
    return this.request(
      utils.merge(config || {}, {
        method: method,
        url: url
      })
    );
  };
}
