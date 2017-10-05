{
  const scriptPath = path.resolve(__dirname, "./test_root/throwing.js");
  expect(run([scriptPath, "--no-cache"]).stderr).toMatch("Error: throwing\n");
}
