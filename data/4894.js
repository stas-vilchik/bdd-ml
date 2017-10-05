{
  const client = watchman.Client.mock.instances[0];
  const calls = client.command.mock.calls;
  expect(client.on).toBeCalled();
  expect(client.on).toBeCalledWith("error", expect.any(Function));
  expect(calls[0][0][0]).toEqual("watch-project");
  expect(calls[1][0][0]).toEqual("watch-project");
  const query1 = calls[2][0];
  const query2 = calls[3][0];
  expect(query1[0]).toEqual("query");
  expect(query2[0]).toEqual("query");
  expect(query1[2].expression).toEqual([
    "allof",
    ["type", "f"],
    ["anyof", ["suffix", "js"], ["suffix", "json"]],
    ["anyof", ["dirname", "/root-mock/fruits"]]
  ]);
  expect(query2[2].expression).toEqual([
    "allof",
    ["type", "f"],
    ["anyof", ["suffix", "js"], ["suffix", "json"]],
    ["anyof", ["dirname", "/root-mock/vegetables"]]
  ]);
  expect(query1[2].fields).toEqual(["name", "exists", "mtime_ms"]);
  expect(query2[2].fields).toEqual(["name", "exists", "mtime_ms"]);
  expect(query1[2].suffix).toEqual(["js", "json"]);
  expect(query2[2].suffix).toEqual(["js", "json"]);
  expect(data.clocks).toEqual({
    "/fruits": "c:fake-clock:1",
    "/vegetables": "c:fake-clock:2"
  });
  expect(data.files).toEqual(mockFiles);
  path.relative = originalPathRelative;
  expect(client.end).toBeCalled();
}
