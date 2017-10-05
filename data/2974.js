{
  const toRemove = summary.disallowed.success
    .concat(summary.disallowed.failure)
    .map(function(test) {
      return test.id;
    });
  const toAdd = summary.disallowed.falsePositive
    .concat(summary.disallowed.falseNegative)
    .map(function(test) {
      return test.id;
    });
  const newContents = contents
    .split("\n")
    .map(function(line) {
      const testId = line.replace(/#.*$/, "").trim();

      if (toRemove.indexOf(testId) > -1) {
        return null;
      }

      return line;
    })
    .filter(function(line) {
      return line !== null;
    })
    .concat(toAdd)
    .join("\n");
  return pfs.writeFile(filename, newContents, "utf-8");
}
