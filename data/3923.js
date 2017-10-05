{
  const definitions = docs.definitions;
  if (!definitions) return createMock(projectId, docs);
  Object.keys(definitions).forEach(key => {
    const definition = definitions[key];
    const properties = definition.properties || {};
    Object.keys(properties).forEach(key => {
      const propertie = properties[key];

      if (propertie.items && definitions[propertie.items.type]) {
        const type = propertie.items.type || propertie.items.$ref;
        propertie.items.$ref = `#/definitions/${type}`;
        delete propertie.items.type;
      }
    });
  });
  docs.definitions = requireAllProperties(docs.definitions);
  return createMock(projectId, docs);
}
