{
  if (ReactTestUtils.isDOMComponent(inst)) {
    return false;
  }

  return (
    inst != null &&
    typeof inst.render === "function" &&
    typeof inst.setState === "function"
  );
}
