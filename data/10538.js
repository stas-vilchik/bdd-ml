{
  return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".");
}
