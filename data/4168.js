{
  const filename = "no-obsolete-if-skipped.test.js";
  const template = makeTemplate(`test('snapshots', () => {
      expect(true).toBe(true);
    });

    $1('will be skipped', () => {
      expect({a: 6}).toMatchSnapshot();
    });
    `);
  {
    writeFiles(TESTS_DIR, {
      [filename]: template(["test"])
    });
    const { stderr, status } = runJest(DIR, ["-w=1", "--ci=false", filename]);
    expect(stderr).toMatch("1 snapshot written in 1 test suite.");
    expect(status).toBe(0);
  }
  {
    writeFiles(TESTS_DIR, {
      [filename]: template(["test.skip"])
    });
    const { stderr, status } = runJest(DIR, ["-w=1", "--ci=false", filename]);
    expect(stderr).not.toMatch("1 obsolete snapshot found");
    expect(status).toBe(0);
  }
}
