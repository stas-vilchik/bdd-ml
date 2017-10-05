{
  const { stdout, status } = runJest(DIR, [
    "--no-cache",
    "--coverage",
    "--json"
  ]);
  expect(status).toBe(0);

  try {
    JSON.parse(stdout);
  } catch (err) {
    throw new Error(
      "Can't parse the JSON result from stdout. " + err.toString()
    );
  }
}
