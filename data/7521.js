{
  var node = createNode("<i>123</i><i>456</i><i>789</i>");
  expectNodeOffset(getNodeForCharacterOffset(node, 0), "123", 0);
  expectNodeOffset(getNodeForCharacterOffset(node, 4), "456", 1);
}
