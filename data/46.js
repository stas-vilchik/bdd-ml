{
  return this.request(
    utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    })
  );
}
