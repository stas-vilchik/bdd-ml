{
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
}
