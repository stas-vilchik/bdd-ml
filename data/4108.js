{
  const { stderr, status } = runJest("module_name_mapper_wrong_config");
  const { rest } = extractSummary(stderr);
  expect(status).toBe(1);
  expect(rest).toMatchSnapshot();
}
