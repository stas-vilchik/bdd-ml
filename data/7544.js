{
  var ancestorInfo = Object.assign({}, oldInfo || emptyAncestorInfo);
  var info = {
    tag: tag,
    instance: instance
  };

  if (inScopeTags.indexOf(tag) !== -1) {
    ancestorInfo.aTagInScope = null;
    ancestorInfo.buttonTagInScope = null;
    ancestorInfo.nobrTagInScope = null;
  }

  if (buttonScopeTags.indexOf(tag) !== -1) {
    ancestorInfo.pTagInButtonScope = null;
  }

  if (
    specialTags.indexOf(tag) !== -1 &&
    tag !== "address" &&
    tag !== "div" &&
    tag !== "p"
  ) {
    ancestorInfo.listItemTagAutoclosing = null;
    ancestorInfo.dlItemTagAutoclosing = null;
  }

  ancestorInfo.current = info;

  if (tag === "form") {
    ancestorInfo.formTag = info;
  }

  if (tag === "a") {
    ancestorInfo.aTagInScope = info;
  }

  if (tag === "button") {
    ancestorInfo.buttonTagInScope = info;
  }

  if (tag === "nobr") {
    ancestorInfo.nobrTagInScope = info;
  }

  if (tag === "p") {
    ancestorInfo.pTagInButtonScope = info;
  }

  if (tag === "li") {
    ancestorInfo.listItemTagAutoclosing = info;
  }

  if (tag === "dd" || tag === "dt") {
    ancestorInfo.dlItemTagAutoclosing = info;
  }

  return ancestorInfo;
}
