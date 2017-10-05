{
  if (typeof method === "string") {
    modules[name][method] = true;
  } else {
    modules[name][method.name] = method.args;
  }
}
