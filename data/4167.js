{
  const filename = "first-snapshot-fails-second-passes.test.js";
  const template = makeTemplate(`test('snapshots', () => {
      expect($1).toMatchSnapshot();
      expect($2).toMatchSnapshot();
    });`);
  {
    writeFiles(TESTS_DIR, {
      [filename]: template([`'apple'`, `'banana'`])
    });
    const { stderr, status } = runJest(DIR, ["-w=1", "--ci=false", filename]);
    expect(stderr).toMatch("2 snapshots written in 1 test suite.");
    expect(status).toBe(0);
  }
  {
    writeFiles(TESTS_DIR, {
      [filename]: template([`'kiwi'`, `'banana'`])
    });
    const { stderr, status } = runJest(DIR, ["-w=1", "--ci=false", filename]);
    expect(stderr).toMatch("Received value does not match stored snapshot");
    expect(stderr).toMatch('- "apple"\n    + "kiwi"');
    expect(stderr).not.toMatch("1 obsolete snapshot found");
    expect(status).toBe(1);
  }
}
