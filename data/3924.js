{
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
}
