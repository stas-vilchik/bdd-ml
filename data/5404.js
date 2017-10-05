{
  const DOCS_MD_DIR = "../docs/";
  const BLOG_MD_DIR = "../blog/";
  const gettingStarted = splitHeader(
    fs.readFileSync(DOCS_MD_DIR + "en/GettingStarted.md", "utf8")
  ).content.replace(/\(\/jest\//g, "(https://facebook.github.io/jest/");
  let readme = fs.readFileSync("../README.md", "utf8");
  const guideStart = "<!-- generated_getting_started_start -->";
  const guideEnd = "<!-- generated_getting_started_end -->";
  readme =
    readme.slice(0, readme.indexOf(guideStart) + guideStart.length) +
    gettingStarted +
    readme.slice(readme.indexOf(guideEnd));
  fs.writeFileSync("../README.md", readme);
  const regexSubFolder = /..\/docs\/(.*)\/.*/;
  const enabledLanguages = [];
  languages.filter(lang => lang.enabled).map(lang => {
    enabledLanguages.push(lang.tag);
  });
  glob(DOCS_MD_DIR + "**", (er, files) => {
    const metadatas = {
      files: []
    };
    files.forEach(file => {
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
          metadata.layout[0].toUpperCase() +
          metadata.layout.substr(1) +
          "Layout";
        writeFileAndCreateFolder(
          "src/jest/" + metadata.permalink.replace(/\.html$/, ".js"),
          buildFile(layout, metadata, rawContent, language)
        );
      }

      if (extension === ".json") {
        const content = fs.readFileSync(file, "utf8");
        metadatas[path.basename(file, ".json")] = JSON.parse(content);
      }
    });
    fs.writeFileSync(
      "core/metadata.js",
      "/**\n" +
        " * @generated\n" +
        " * @providesModule Metadata\n" +
        " */\n" +
        "module.exports = " +
        JSON.stringify(metadatas, null, 2) +
        ";"
    );
  });
  glob(BLOG_MD_DIR + "**/*.*", (er, files) => {
    const metadatas = {
      files: []
    };
    files
      .sort()
      .reverse()
      .forEach(file => {
        const filePath = path
          .basename(file)
          .replace("-", "/")
          .replace("-", "/")
          .replace("-", "/")
          .replace(/\./g, "-")
          .replace(/\-md$/, ".html");
        const res = extractMetadata(
          fs.readFileSync(file, {
            encoding: "utf8"
          })
        );
        const rawContent = res.rawContent;
        const metadata = Object.assign(
          {
            path: filePath,
            content: rawContent
          },
          res.metadata
        );
        metadata.id = metadata.title;
        metadatas.files.push(metadata);
        writeFileAndCreateFolder(
          "src/jest/blog/" + filePath.replace(/\.html$/, ".js"),
          buildFile("BlogPostLayout", metadata, rawContent)
        );
      });
    const perPage = 10;

    for (
      let page = 0;
      page < Math.ceil(metadatas.files.length / perPage);
      ++page
    ) {
      writeFileAndCreateFolder(
        "src/jest/blog" + (page > 0 ? "/page" + (page + 1) : "") + "/index.js",
        buildFile("BlogPageLayout", {
          page,
          perPage
        })
      );
    }

    fs.writeFileSync(
      "core/metadata-blog.js",
      "/**\n" +
        " * @generated\n" +
        " * @providesModule MetadataBlog\n" +
        " */\n" +
        "module.exports = " +
        JSON.stringify(metadatas, null, 2) +
        ";"
    );
  });
  writeFileAndCreateFolder("src/jest/blog/feed.xml", feed("rss"));
  writeFileAndCreateFolder("src/jest/blog/atom.xml", feed("atom"));
}
