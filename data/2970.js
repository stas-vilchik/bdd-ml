{
  return contents
    .split("\n")
    .map(function(line) {
      return line.replace(/#.*$/, "").trim();
    })
    .filter(function(line) {
      return line.length > 0;
    })
    .reduce(function(table, filename) {
      table[filename] = true;
      return table;
    }, Object.create(null));
}
