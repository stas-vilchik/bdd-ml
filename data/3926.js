{
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
}
