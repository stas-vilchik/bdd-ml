{
  var extendee = getRegisteredDefinition(extnds);

  if (extendee) {
    return ancestry(extendee.extends).concat([extendee]);
  }

  return [];
}
