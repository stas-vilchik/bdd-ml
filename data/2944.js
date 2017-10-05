{
  const files = fs.readdirSync(dir ? path.join(root, dir) : root);
  let result = [];

  for (let i = 0; i < files.length; i++) {
    const file = dir ? path.join(dir, files[i]) : files[i];
    const stats = fs.statSync(path.join(root, file));

    if (stats.isDirectory()) {
      result = result.concat(list_files(root, file));
    } else {
      result.push(file);
    }
  }

  return result.sort();
}
