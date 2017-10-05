{
  const { stdout, status, stderr } = runJest("custom_reporters", [
    "add.test.js"
  ]);
  const parsedJSON = JSON.parse(stdout);
  expect(status).toBe(0);
  expect(stderr.trim()).toBe("");
  expect(parsedJSON).toMatchSnapshot();
}
