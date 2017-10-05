{
  const loc = path.join(testLoc, key + ".txt");

  if (fs.existsSync(loc)) {
    opts[key] = helper.readFile(loc);
  } else {
    opts[key] = opts[key] || "";
  }
}
