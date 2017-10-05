{
  const exports = Object.create(null);
  eval(fs.readFileSync(snapshotOfCopy, "utf8"));
  return exports;
}
