{
  if (node === this.target) return;
  scheduleCallback(this.observer);
  this.transientObservedNodes.push(node);
  var registrations = registrationsTable.get(node);
  if (!registrations) registrationsTable.set(node, (registrations = []));
  registrations.push(this);
}
