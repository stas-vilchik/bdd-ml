{
  const dir = path.resolve(__dirname, "../typescript-coverage");
  run("yarn", dir);
  const { stdout } = runJest(dir, ["--coverage", "--no-cache"]);
  expect(stdout).toMatchSnapshot();
}
