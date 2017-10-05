{
  writeFiles(DIR, {
    "__tests__/test.test.js": `test('test', () => {});`,
    "package.json": JSON.stringify({
      jest: {
        environment: "node"
      }
    })
  });
  let { stdout } = runJest(DIR, [
    "--showConfig",
    "--no-cache",
    "--updateSnapshot"
  ]);
  stdout = stdout
    .replace(/"cacheDirectory": "(.+)"/g, '"cacheDirectory": "/tmp/jest"')
    .replace(/"name": "(.+)"/g, '"name": "[md5 hash]"')
    .replace(/"version": "(.+)"/g, '"version": "[version]"')
    .replace(/"maxWorkers": (\d+)/g, '"maxWorkers": "[maxWorkers]"')
    .replace(/\"\S*show_config_test/gm, '"<<REPLACED_ROOT_DIR>>')
    .replace(/\"\S*\/jest\/packages/gm, '"<<REPLACED_JEST_PACKAGES_DIR>>');
  expect(stdout).toMatchSnapshot();
}
