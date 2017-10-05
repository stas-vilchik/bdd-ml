{
  var node = createNode("<i>123</i>");
  expect(getNodeForCharacterOffset(node, -1)).toBeUndefined();
  expect(getNodeForCharacterOffset(node, 4)).toBeUndefined();
}
