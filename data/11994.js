{
  var element = stack[stack.length - 1];
  var lastNode = element.children[element.children.length - 1];

  if (lastNode && lastNode.type === 3 && lastNode.text === " " && !inPre) {
    element.children.pop();
  }

  stack.length -= 1;
  currentParent = stack[stack.length - 1];
  closeElement(element);
}
