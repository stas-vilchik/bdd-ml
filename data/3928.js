new Promise((resolve, reject) => {
  specV1.convert(
    swaggerDoc,
    result,
    true,
    (err, docs) => (err ? reject(err) : resolve(_createMock(project.id, docs)))
  );
});
