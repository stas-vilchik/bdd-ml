{
  return JSON.parse(
    fs.readFileSync(path.join(PATH_TO_REPO, "package.json"), "utf8")
  ).version;
}
