{
  const { stderr, status } = runJest("module_name_mapper_correct_config");
  const { rest } = extractSummary(stderr);
  expect(status).toBe(0);
  expect(rest).toMatchSnapshot();
}
