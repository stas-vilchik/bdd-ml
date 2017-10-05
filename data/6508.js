{
  this.childList = !!options.childList;
  this.subtree = !!options.subtree;

  if (
    !("attributes" in options) &&
    ("attributeOldValue" in options || "attributeFilter" in options)
  ) {
    this.attributes = true;
  } else {
    this.attributes = !!options.attributes;
  }

  if ("characterDataOldValue" in options && !("characterData" in options))
    this.characterData = true;
  else this.characterData = !!options.characterData;

  if (
    (!this.attributes &&
      (options.attributeOldValue || "attributeFilter" in options)) ||
    (!this.characterData && options.characterDataOldValue)
  ) {
    throw new TypeError();
  }

  this.characterData = !!options.characterData;
  this.attributeOldValue = !!options.attributeOldValue;
  this.characterDataOldValue = !!options.characterDataOldValue;

  if ("attributeFilter" in options) {
    if (
      options.attributeFilter == null ||
      typeof options.attributeFilter !== "object"
    ) {
      throw new TypeError();
    }

    this.attributeFilter = slice.call(options.attributeFilter);
  } else {
    this.attributeFilter = null;
  }
}
