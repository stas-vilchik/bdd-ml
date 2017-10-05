{
  const file = line.replace(/#.*$/, "").trim();
  return (
    !contains(summary.disallowed.success, file) &&
    !contains(summary.disallowed.failure, file) &&
    summary.unrecognized.indexOf(file) === -1
  );
}
