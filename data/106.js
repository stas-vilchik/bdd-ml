{
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });
  return data;
}
