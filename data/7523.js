{
  var node = createNode(
    "<i>" +
      "<i>1</i>" +
      "<i>" +
      "<i>" +
      "<i>2</i>" +
      "<i></i>" +
      "</i>" +
      "</i>" +
      "<i>" +
      "3" +
      "<i>45</i>" +
      "</i>" +
      "</i>"
  );
  expectNodeOffset(getNodeForCharacterOffset(node, 3), "3", 1);
  expectNodeOffset(getNodeForCharacterOffset(node, 5), "45", 2);
  expect(getNodeForCharacterOffset(node, 10)).toBeUndefined();
}
