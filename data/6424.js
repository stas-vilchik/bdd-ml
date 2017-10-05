{
  const version = versions[name];

  if (version !== reactVersion) {
    allVersionsMatch = false;
    console.log(
      "%s version does not match package.json. Expected %s, saw %s.",
      name,
      reactVersion,
      version
    );
  }
}
