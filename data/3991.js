{
  const mappedModuleName = config.moduleNameMapper[regex];

  if (source.match(regex)) {
    const matches = source.match(regex);

    if (!matches) {
      source = mappedModuleName;
    } else {
      source = mappedModuleName.replace(
        /\$([0-9]+)/g,
        (_, index) => matches[parseInt(index, 10)]
      );
    }

    source = path.resolve(source);
  }
}
