{
  var folder = path.join(__dirname, "data");

  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }

  fs.writeFile(path.join(folder, file), JSON.stringify(data, null, 2));
}
