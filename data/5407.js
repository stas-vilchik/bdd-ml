{
  let language = "en";
  const match = regexSubFolder.exec(file);

  if (match) {
    language = match[1];
  }

  if (enabledLanguages.indexOf(language) === -1) {
    return;
  }

  const extension = path.extname(file);

  if (extension === ".md" || extension === ".markdown") {
    const res = extractMetadata(fs.readFileSync(file, "utf8"));
    const metadata = res.metadata;
    const rawContent = res.rawContent;
    metadata.source = path.basename(file);
    metadata.permalink = metadata.permalink.replace(
      /\/en\//g,
      "/" + language + "/"
    );
    metadata.localized_id = metadata.id;
    metadata.id = language + "-" + metadata.id;

    if (metadata.previous) {
      metadata.previous_id = metadata.previous;
      metadata.previous = language + "-" + metadata.previous;
    }

    if (metadata.next) {
      metadata.next_id = metadata.next;
      metadata.next = language + "-" + metadata.next;
    }

    metadata.language = language;
    metadatas.files.push(metadata);

    if (metadata.permalink.match(/^https?:/)) {
      return;
    }

    const layout =
      metadata.layout[0].toUpperCase() + metadata.layout.substr(1) + "Layout";
    writeFileAndCreateFolder(
      "src/jest/" + metadata.permalink.replace(/\.html$/, ".js"),
      buildFile(layout, metadata, rawContent, language)
    );
  }

  if (extension === ".json") {
    const content = fs.readFileSync(file, "utf8");
    metadatas[path.basename(file, ".json")] = JSON.parse(content);
  }
}
