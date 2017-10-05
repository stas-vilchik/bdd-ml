{
  const filename = "basic-support.test.js";
  const template = makeTemplate(
    `test('snapshots', () => expect($1).toMatchSnapshot());`
  );
  {
    writeFiles(TESTS_DIR, {
      [filename]: template(['{apple: "original value"}'])
    });
    const { stderr, status } = runJest(DIR, ["-w=1", "--ci=false", filename]);
    expect(stderr).toMatch("1 snapshot written in 1 test suite.");
    expect(status).toBe(0);
  }
  {
    const { stderr, status } = runJest(DIR, ["-w=1", "--ci=false", filename]);
    expect(stderr).toMatch("Snapshots:   1 passed, 1 total");
    expect(stderr).not.toMatch("1 snapshot written in 1 test suite.");
    expect(status).toBe(0);
  }
  {
    writeFiles(TESTS_DIR, {
      [filename]: template(['{apple: "updated value"}'])
    });
    const { stderr, status } = runJest(DIR, ["-w=1", "--ci=false", filename]);
    expect(stderr).toMatch("Received value does not match stored snapshot");
    expect(status).toBe(1);
  }
  {
    const { stderr, status } = runJest(DIR, [
      "-w=1",
      "--ci=false",
      filename,
      "-u"
    ]);
    expect(stderr).toMatch("1 snapshot updated in 1 test suite.");
    expect(status).toBe(0);
  }
}
