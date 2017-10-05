{
  const data = "<div>\r\n</div>";
  const serializedData = serialize(data);
  expect(serializedData).toBe('\n"<div>\n</div>"\n');
}
