{
  expect(() => {
    ensureNumbers(1, "not_a_number");
  }).toThrow("Expected value must be a number");
}
