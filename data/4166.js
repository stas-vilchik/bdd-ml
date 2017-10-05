{
  const filename = "error-thrown-before-snapshot.test.js";
  const template = makeTemplate(`test('snapshots', () => {
      expect($1).toBeTruthy();
      expect($2).toMatchSnapshot();
    });`);
  {
    writeFiles(TESTS_DIR, {
      [filename]: template(["true", '{a: "original"}'])
    });
    const { stderr, status } = runJest(DIR, ["-w=1", "--ci=false", filename]);
    expect(stderr).toMatch("1 snapshot written in 1 test suite.");
    expect(status).toBe(0);
  }
  {
    const { stderr, status } = runJest(DIR, ["-w=1", "--ci=false", filename]);
    expect(stderr).toMatch("Snapshots:   1 passed, 1 total");
    expect(status).toBe(0);
  }
  {
    writeFiles(TESTS_DIR, {
      [filename]: template(["false", '{a: "original"}'])
    });
    const { stderr, status } = runJest(DIR, ["-w=1", "--ci=false", filename]);
    expect(stderr).not.toMatch("1 obsolete snapshot found");
    expect(status).toBe(1);
  }
}
