{
  e.stopImmediatePropagation();

  switch (e.type) {
    case "DOMAttrModified":
      var name = e.attrName;
      var namespace = e.relatedNode.namespaceURI;
      var target = e.target;
      var record = new getRecord("attributes", target);
      record.attributeName = name;
      record.attributeNamespace = namespace;
      var oldValue =
        e.attrChange === MutationEvent.ADDITION ? null : e.prevValue;
      forEachAncestorAndObserverEnqueueRecord(target, function(options) {
        if (!options.attributes) return;

        if (
          options.attributeFilter &&
          options.attributeFilter.length &&
          options.attributeFilter.indexOf(name) === -1 &&
          options.attributeFilter.indexOf(namespace) === -1
        ) {
          return;
        }

        if (options.attributeOldValue) return getRecordWithOldValue(oldValue);
        return record;
      });
      break;

    case "DOMCharacterDataModified":
      var target = e.target;
      var record = getRecord("characterData", target);
      var oldValue = e.prevValue;
      forEachAncestorAndObserverEnqueueRecord(target, function(options) {
        if (!options.characterData) return;
        if (options.characterDataOldValue)
          return getRecordWithOldValue(oldValue);
        return record;
      });
      break;

    case "DOMNodeRemoved":
      this.addTransientObserver(e.target);

    case "DOMNodeInserted":
      var target = e.relatedNode;
      var changedNode = e.target;
      var addedNodes, removedNodes;

      if (e.type === "DOMNodeInserted") {
        addedNodes = [changedNode];
        removedNodes = [];
      } else {
        addedNodes = [];
        removedNodes = [changedNode];
      }

      var previousSibling = changedNode.previousSibling;
      var nextSibling = changedNode.nextSibling;
      var record = getRecord("childList", target);
      record.addedNodes = addedNodes;
      record.removedNodes = removedNodes;
      record.previousSibling = previousSibling;
      record.nextSibling = nextSibling;
      forEachAncestorAndObserverEnqueueRecord(target, function(options) {
        if (!options.childList) return;
        return record;
      });
  }

  clearRecords();
}
