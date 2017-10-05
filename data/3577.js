{
  return MockModel.update(
    {
      _id: mock.id
    },
    {
      $set: {
        url: mock.url,
        mode: mock.mode,
        method: mock.method,
        parameters: mock.parameters,
        description: mock.description,
        response_model: mock.response_model
      }
    }
  );
}
