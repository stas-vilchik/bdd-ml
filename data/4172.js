{
  const filename = "does-not-accept-arguments.test.js";
  const template = makeTemplate(`test('does not accept arguments', () => {
      expect(() => { throw new Error('apple'); })
        .toThrowErrorMatchingSnapshot('foobar');
    });
    `);
  {
    writeFiles(TESTS_DIR, {
      [filename]: template()
    });
    const { stderr, status } = runJest(DIR, ["-w=1", "--ci=false", filename]);
    expect(stderr).toMatch("Matcher does not accept any arguments.");
    expect(status).toBe(1);
  }
}
