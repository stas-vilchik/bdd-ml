{
  return useNative
    ? link.__loaded || (link.import && link.import.readyState !== "loading")
    : link.__importParsed;
}
