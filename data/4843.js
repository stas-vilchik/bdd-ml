{
  const { data } = options;
  data.files = object({
    "/fruits/banana.js": ["", 32, 0, []]
  });
  return Promise.resolve(data);
}
