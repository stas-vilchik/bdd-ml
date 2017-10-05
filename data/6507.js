{
  var interestedObservers = Object.create(null);
  var associatedStrings = Object.create(null);

  for (var node = target; node; node = node.parentNode) {
    var registrations = registrationsTable.get(node);
    if (!registrations) continue;

    for (var j = 0; j < registrations.length; j++) {
      var registration = registrations[j];
      var options = registration.options;
      if (node !== target && !options.subtree) continue;
      if (type === "attributes" && !options.attributes) continue;

      if (
        type === "attributes" &&
        options.attributeFilter &&
        (data.namespace !== null ||
          options.attributeFilter.indexOf(data.name) === -1)
      ) {
        continue;
      }

      if (type === "characterData" && !options.characterData) continue;
      if (type === "childList" && !options.childList) continue;
      var observer = registration.observer;
      interestedObservers[observer.uid_] = observer;

      if (
        (type === "attributes" && options.attributeOldValue) ||
        (type === "characterData" && options.characterDataOldValue)
      ) {
        associatedStrings[observer.uid_] = data.oldValue;
      }
    }
  }

  for (var uid in interestedObservers) {
    var observer = interestedObservers[uid];
    var record = new MutationRecord(type, target);

    if ("name" in data && "namespace" in data) {
      record.attributeName = data.name;
      record.attributeNamespace = data.namespace;
    }

    if (data.addedNodes) record.addedNodes = data.addedNodes;
    if (data.removedNodes) record.removedNodes = data.removedNodes;
    if (data.previousSibling) record.previousSibling = data.previousSibling;
    if (data.nextSibling) record.nextSibling = data.nextSibling;
    if (associatedStrings[uid] !== undefined)
      record.oldValue = associatedStrings[uid];
    scheduleCallback(observer);
    observer.records_.push(record);
  }
}
