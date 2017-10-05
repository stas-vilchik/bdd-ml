{
  if (indexOrNode === undefined) {
    HTMLElement.prototype.remove.call(this);
    return;
  }

  if (typeof indexOrNode === "object") indexOrNode = unwrap(indexOrNode);
  unwrap(this).remove(indexOrNode);
}
