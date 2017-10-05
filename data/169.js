{
  return this.request(
    i.merge(r || {}, {
      method: e,
      url: t,
      data: n
    })
  );
}
