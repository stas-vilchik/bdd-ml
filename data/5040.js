{
  const scriptPath = path.resolve(__dirname, "./test_root/logging.js");
  expect(run([scriptPath, "--no-cache"]).stdout).toMatch("Hello, world!\n");
}
