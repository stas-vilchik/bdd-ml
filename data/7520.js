{
  it("should handle siblings", () => {
    var node = createNode("<i>123</i><i>456</i><i>789</i>");
    expectNodeOffset(getNodeForCharacterOffset(node, 0), "123", 0);
    expectNodeOffset(getNodeForCharacterOffset(node, 4), "456", 1);
  });
  it("should handle trailing chars", () => {
    var node = createNode("<i>123</i><i>456</i><i>789</i>");
    expectNodeOffset(getNodeForCharacterOffset(node, 3), "123", 3);
    expectNodeOffset(getNodeForCharacterOffset(node, 9), "789", 3);
  });
  it("should handle trees", () => {
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
  });
  it("should handle non-existent offset", () => {
    var node = createNode("<i>123</i>");
    expect(getNodeForCharacterOffset(node, -1)).toBeUndefined();
    expect(getNodeForCharacterOffset(node, 4)).toBeUndefined();
  });
}
