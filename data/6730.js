{
  var context = unsafeUnwrap(this).getContext.apply(
    unsafeUnwrap(this),
    arguments
  );
  return context && wrap(context);
}
