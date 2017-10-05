{
  if (typeof method === "string") {
    return !!(modules[name] && modules[name][method]);
  }

  return !!modules[name];
}
