{
  expect(error.message).toEqual(
    "Crawler retry failed:\n" +
      "  Original error: watchman error\n" +
      "  Retry error: node error\n"
  );
}
