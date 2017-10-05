{
  var cwd = process.cwd();
  var extension = process.platform === "win32" ? ".cmd" : "";
  var jestBin = path.resolve("node_modules", ".bin", "jest" + extension);
  var result = spawnSync(jestBin, [testFile], {
    cwd,
    env: Object.assign({}, process.env, {
      REACT_CLASS_EQUIVALENCE_TEST: "true"
    })
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(
      "jest process exited with: " +
        result.status +
        "\n" +
        "stdout: " +
        result.stdout.toString() +
        "stderr: " +
        result.stderr.toString()
    );
  }

  return result.stdout.toString() + result.stderr.toString();
}
