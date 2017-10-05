{
  return fs
    .readFileSync(filename, "utf8")
    .split("\n")
    .map(line => line.replace(/#.*$/, "").trim())
    .filter(Boolean);
}
