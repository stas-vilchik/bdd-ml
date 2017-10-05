{
  arguments[0] = unwrap(arguments[0]);
  return unsafeUnwrap(this).createPattern.apply(unsafeUnwrap(this), arguments);
}
