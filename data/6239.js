{
  let npath = path.normalize(untildify(input));

  if (npath === ".") {
    return "Cannot be `.`";
  }

  let stats;

  try {
    stats = fs.statSync(npath);
  } catch (e) {
    return `Error: ${e}`;
  }

  if (!stats.isDirectory()) {
    return `${npath} is not a directory.`;
  }

  return true;
}
