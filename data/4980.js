{
  const fake = jest.fn(a => a + 2);
  fake.mockReturnValueOnce(42);
  expect(fake(2)).toEqual(42);
  expect(fake(2)).toEqual(4);
}
