{
  cmdArgs.forEach(cmdArg => {
    const devPath = path.join(__dirname, dir, "dev");

    if (fs.existsSync(devPath)) {
      buildFixture(cmdArg, devPath);
    }

    const prodPath = path.join(__dirname, dir, "prod");

    if (fs.existsSync(prodPath)) {
      buildFixture(cmdArg, prodPath);
    }
  });
}
