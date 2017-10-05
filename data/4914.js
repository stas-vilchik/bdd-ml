{
  const keyValuePairs = [["key1", "value1"], ["key2", "value2"]];
  const smallerKeyValuePairs = [["key1", "value1"]];
  const biggerKeyValuePairs = [
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"]
  ];
  const map = new Map(keyValuePairs);
  expect(map).not.toEqual(smallerKeyValuePairs);
  expect(map).not.toEqual(new Map(smallerKeyValuePairs));
  expect(map).not.toEqual(biggerKeyValuePairs);
  expect(map).not.toEqual(new Map(biggerKeyValuePairs));
  expect(map).not.toEqual(keyValuePairs);
  expect(map).not.toBe(keyValuePairs);
  expect(map).toEqual(new Map(keyValuePairs));
}
