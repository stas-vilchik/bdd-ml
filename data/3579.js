{
  return MockModel.remove({
    _id: {
      $in: mockIds
    }
  });
}
