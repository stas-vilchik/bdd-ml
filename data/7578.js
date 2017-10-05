{
  return (
    ReactTestUtils.isDOMComponent(inst) &&
    inst.tagName.toUpperCase() === tagName.toUpperCase()
  );
}
