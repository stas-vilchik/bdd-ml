{
  const expectedOutput =
    "Please provide a path to a script. (See --help for details)\n";
  expect(run([]).stdout).toBe(expectedOutput);
}
