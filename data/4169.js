{
  const filename = "accept-custom-snapshot-name.test.js";
  const template = makeTemplate(`test('accepts custom snapshot name', () => {
      expect(true).toMatchSnapshot('custom-name');
    });
    `);
  {
    writeFiles(TESTS_DIR, {
      [filename]: template()
    });
    const { stderr, status } = runJest(DIR, ["-w=1", "--ci=false", filename]);
    expect(stderr).toMatch("1 snapshot written in 1 test suite.");
    expect(status).toBe(0);
  }
}
