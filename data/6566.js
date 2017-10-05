{
  switch (type) {
    case "DOMAttrModified":
    case "DOMAttributeNameChanged":
    case "DOMCharacterDataModified":
    case "DOMElementNameChanged":
    case "DOMNodeInserted":
    case "DOMNodeInsertedIntoDocument":
    case "DOMNodeRemoved":
    case "DOMNodeRemovedFromDocument":
    case "DOMSubtreeModified":
      return true;
  }

  return false;
}
