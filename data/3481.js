{
  const path = this.path;
  const prefix = `/${path.split("/")[1]}`;
  return !new RegExp(config.get("routerPrefix.api")).test(prefix)
    ? true
    : _.some(
        config.get("publicAPIs").map(o => pathToRegexp(o).test(this.path)),
        Boolean
      );
}
