{
  var transientObservedNodes = this.transientObservedNodes;
  this.transientObservedNodes = [];

  for (var i = 0; i < transientObservedNodes.length; i++) {
    var node = transientObservedNodes[i];
    var registrations = registrationsTable.get(node);

    for (var j = 0; j < registrations.length; j++) {
      if (registrations[j] === this) {
        registrations.splice(j, 1);
        break;
      }
    }
  }
}
