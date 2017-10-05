{
  const testId = line.replace(/#.*$/, "").trim();

  if (toRemove.indexOf(testId) > -1) {
    return null;
  }

  return line;
}
