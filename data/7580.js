{
  return ReactTestUtils.findAllInRenderedTree(root, function(inst) {
    return ReactTestUtils.isCompositeComponentWithType(inst, componentType);
  });
}
