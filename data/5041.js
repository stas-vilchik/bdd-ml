{
  const scriptPath = path.resolve(__dirname, "./test_root/logging.js");
  const output = run([
    scriptPath,
    "--no-cache",
    "--config=" +
      JSON.stringify({
        automock: true
      })
  ]);
  expect(output.stdout).toMatch("Hello, world!\n");
}
