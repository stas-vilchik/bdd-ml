{
  const languages = [];
  files.forEach(file => {
    const extension = path.extname(file);

    if (extension === ".json") {
      const fileContent = fs.readFileSync(file, "utf8");
      const baseName = path.basename(file);
      const outputFileName = baseName.substr(0, baseName.indexOf(".json"));
      const language = outputFileName.split(".")[0];
      const prettyFileContent = prettier.format(
        "module.exports = " + fileContent,
        {
          useTabs: false,
          printWidth: 80,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: "es5",
          bracketSpacing: true,
          jsxBracketSameLine: false,
          parser: "babylon",
          semi: true
        }
      );
      fs.writeFileSync("./i18n/" + outputFileName + ".js", prettyFileContent);
      languages.push(language);
    }
  });
  let injectedContent = "";
  languages.filter(language => language != "en").forEach(language => {
    injectedContent +=
      "\nsiteConfig['" +
      language +
      "'] = require('./i18n/" +
      language +
      ".js');";
  });
  let siteConfigFile = fs.readFileSync("./siteConfig.js", "utf8");
  const injectStart = "/* INJECT LOCALIZED FILES BEGIN */";
  const injectEnd = "/* INJECT LOCALIZED FILES END */";
  siteConfigFile =
    siteConfigFile.slice(
      0,
      siteConfigFile.indexOf(injectStart) + injectStart.length
    ) +
    injectedContent +
    "\n" +
    siteConfigFile.slice(siteConfigFile.indexOf(injectEnd));
  fs.writeFileSync("./siteConfig.js", siteConfigFile);
}
