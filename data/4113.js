{
  const result = runJest("node_path", [], {
    nodePath: ["../node_path/src"]
  });
  expect(result.status).toBe(0);
}
