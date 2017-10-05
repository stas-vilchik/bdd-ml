{
  const expected = [
    "runner beforeAll1",
    "runner beforeAll2",
    "runner beforeEach1",
    "runner beforeEach2",
    "beforeEach1",
    "beforeEach2",
    "outer it 1",
    "afterEach2",
    "afterEach1",
    "runner afterEach2",
    "runner afterEach1",
    "runner afterAll2",
    "runner afterAll1"
  ];
  expect(actions).toEqual(expected);
}
