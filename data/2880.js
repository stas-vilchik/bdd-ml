{
  const props = coreDefinitions.methods[key];
  Object.keys(props).forEach(key2 => {
    const path = props[key2];
    paths.push(path);
  });
}
