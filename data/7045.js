{
  var transientObservedNodes = this.transientObservedNodes;
  this.transientObservedNodes = [];
  transientObservedNodes.forEach(function(node) {
    this.removeListeners_(node);
    var registrations = registrationsTable.get(node);

    for (var i = 0; i < registrations.length; i++) {
      if (registrations[i] === this) {
        registrations.splice(i, 1);
        break;
      }
    }
  }, this);
}
