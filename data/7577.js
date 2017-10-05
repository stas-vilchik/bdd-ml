{
  return ReactTestUtils.findAllInRenderedTree(root, function(inst) {
    return (
      ReactTestUtils.isDOMComponent(inst) &&
      inst.tagName.toUpperCase() === tagName.toUpperCase()
    );
  });
}
