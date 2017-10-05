{
  const metadata = {};
  const both = splitHeader(content);
  const lines = both.header.split("\n");

  for (let i = 0; i < lines.length - 1; ++i) {
    const keyvalue = lines[i].split(":");
    const key = keyvalue[0].trim();
    let value = keyvalue
      .slice(1)
      .join(":")
      .trim();

    try {
      value = JSON.parse(value);
    } catch (e) {}

    metadata[key] = value;
  }

  return {
    metadata,
    rawContent: both.content
  };
}
