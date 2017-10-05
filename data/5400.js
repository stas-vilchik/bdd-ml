{
  const regexp = /\n###\s+(`.*`.*)\n/g;
  let match;
  const headers = [];

  while ((match = regexp.exec(rawContent))) {
    headers.push(match[1]);
  }

  const tableOfContents = headers
    .map(header => `  - [${header}](#${toSlug(header)})`)
    .join("\n");
  return rawContent.replace(TABLE_OF_CONTENTS_TOKEN, tableOfContents);
}
