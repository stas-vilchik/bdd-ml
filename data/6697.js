{
  var list = classListTable.get(this);

  if (!list) {
    classListTable.set(
      this,
      (list = new DOMTokenList(unsafeUnwrap(this).classList, this))
    );
  }

  return list;
}
