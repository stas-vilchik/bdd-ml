{
  var node = createNode("<i>123</i><i>456</i><i>789</i>");
  expectNodeOffset(getNodeForCharacterOffset(node, 3), "123", 3);
  expectNodeOffset(getNodeForCharacterOffset(node, 9), "789", 3);
}
