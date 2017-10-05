{
  const contains = (tests, file) =>
    tests.some(({ test }) => test.file === file);

  const result = fs
    .readFileSync(WHITELIST_PATH, "utf8")
    .split("\n")
    .filter(line => {
      const file = line.replace(/#.*$/, "").trim();
      return (
        !contains(summary.disallowed.success, file) &&
        !contains(summary.disallowed.failure, file) &&
        summary.unrecognized.indexOf(file) === -1
      );
    })
    .join("\n");
  fs.writeFileSync(WHITELIST_PATH, result);
}
