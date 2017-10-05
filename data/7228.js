{
  invariant(
    ReactElement.isValidElement(children),
    "React.Children.only expected to receive a single React element child."
  );
  return children;
}
