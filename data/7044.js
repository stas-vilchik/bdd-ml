{
  if (node === this.target) return;
  this.addListeners_(node);
  this.transientObservedNodes.push(node);
  var registrations = registrationsTable.get(node);
  if (!registrations) registrationsTable.set(node, (registrations = []));
  registrations.push(this);
}
