{
  const files = Array.from(filesToBuild.keys());

  if (files.length) {
    filesToBuild = new Map();

    try {
      execSync(`${BUILD_CMD} ${files.join(" ")}`, {
        stdio: [0, 1, 2]
      });
    } catch (e) {}
  }
}
