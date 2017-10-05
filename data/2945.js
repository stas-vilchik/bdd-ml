{
  const files = list_files(root_dir);
  const tests = new Map();

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const test_name = path.dirname(file);
    const case_parts = path.basename(file).split(".");
    const case_name = case_parts[0];

    if (case_name === "") {
      continue;
    }

    const cases = map_get_default(tests, test_name, Map);
    const case_ = map_get_default(cases, case_name, Object);
    const content = fs.readFileSync(path.join(root_dir, file), "utf8");
    const ext = case_parts[case_parts.length - 1];
    const kind =
      case_parts.length > 2 ? case_parts[case_parts.length - 2] : null;

    if (ext === "js") {
      case_.file = file;
      case_.content = content;
    } else if (ext === "json" && kind === "tree") {
      case_.expected_ast = JSON.parse(content);
    } else if (ext === "json" && kind === "options") {
      case_.options = JSON.parse(content);
    }
  }

  return tests;
}
