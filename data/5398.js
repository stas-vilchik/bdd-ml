{
  let escaped = "`" + str.replace(/\\/g, "\\\\").replace(/`/g, "\\`") + "`";
  escaped = escaped.replace(/require\(/g, "require\\(");
  return escaped.replace(/\$\{([\w\s\d\'\:\.\(\)\?]*)\}/g, "\\${$1}");
}
