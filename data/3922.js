{
  const swaggerUrl = project.swagger_url.split("?")[0];
  const params = {
    url: swaggerUrl
  };

  const _createMock = (projectId, docs) => {
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
  };

  return getSwaggerInfo(params).then(swaggerDoc => {
    const version = (swaggerDoc.swaggerVersion || swaggerDoc.swagger || "")[0];

    if (version === "1" && swaggerDoc.info) {
      return Promise.all(
        swaggerDoc.apis.map(api => getSwaggerInfo(api.path, params))
      ).then(
        result =>
          new Promise((resolve, reject) => {
            specV1.convert(
              swaggerDoc,
              result,
              true,
              (err, docs) =>
                err ? reject(err) : resolve(_createMock(project.id, docs))
            );
          })
      );
    } else if (version === "2") {
      return _createMock(project.id, swaggerDoc);
    }

    return swaggerDoc;
  });
}
