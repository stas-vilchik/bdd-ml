{
  return (
    dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join(".")
  );
}
