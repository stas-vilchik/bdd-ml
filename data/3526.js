mockProxy.newAndSave(
  mocks.map(item => ({
    project: projects[0].id,
    description: item.description,
    method: item.method,
    url: item.url,
    mode: item.mode
  }))
);
