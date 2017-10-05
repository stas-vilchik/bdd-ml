{
  const { data, ignore, roots } = options;
  data.clocks = mockClocks;
  const list = mockChangedFiles || mockFs;

  for (const file in list) {
    if (new RegExp(roots.join("|")).test(file) && !ignore(file)) {
      if (list[file]) {
        data.files[file] = ["", 32, 0, []];
      } else {
        delete data.files[file];
      }
    }
  }

  return Promise.resolve(data);
}
