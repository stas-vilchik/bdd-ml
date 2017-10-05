{
  const { stdout, status, stderr } = runJest("custom_reporters", [
    "add_fail.test.js"
  ]);
  const parsedJSON = JSON.parse(stdout);
  expect(status).toBe(1);
  expect(stderr.trim()).toBe("");
  expect(parsedJSON).toMatchSnapshot();
}
