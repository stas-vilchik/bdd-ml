{
  const { data } = options;
  data.files["/fruits/invalid/file.js"] = ["", 34, 0, []];
  return data;
}
