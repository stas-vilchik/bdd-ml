{
  if (_.isEmpty(data)) {
    mockCount.mock = mockId;
    mockCount.count = 1;
    return mockCount.save();
  }

  data.count += 1;
  return data.save();
}
