{
  var oldValue = unsafeUnwrap(this).data;
  enqueueMutation(this, "characterData", {
    oldValue: oldValue
  });
  unsafeUnwrap(this).data = value;
}
