{
  if (text === void 0) text = "";
  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
}
