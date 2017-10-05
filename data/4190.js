{
  writeFiles(DIR, {
    ".watchmanconfig": "",
    "package.json": "{}"
  });
  const { status, stdout, stderr } = runJest(DIR, ["--version"]);
  expect(stdout).toMatch(/v\d{2}\.\d{1,2}\.\d{1,2}[\-\S]*\n$/);
  expect(stdout.trim().split(/\n/)).toHaveLength(1);
  expect(stderr.trim()).toBe("");
  expect(status).toBe(0);
}
