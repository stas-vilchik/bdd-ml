{
  expect(() => {
    ensureNumbers("not_a_number", 3);
  }).toThrow("Received value must be a number");
}
