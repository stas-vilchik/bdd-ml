{
  path.get("source").node.value = path
    .get("source")
    .node.value.replace(/^babel-runtime/, relativePath);
}
