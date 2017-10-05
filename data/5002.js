{
  Runtime = require("jest-runtime");
  config = normalize(
    {
      rootDir: ".",
      roots: ["./packages/jest-resolve-dependencies"]
    },
    {}
  ).options;
  return Runtime.createContext(config, {
    maxWorkers
  }).then(hasteMap => {
    dependencyResolver = new DependencyResolver(
      hasteMap.resolver,
      hasteMap.hasteFS
    );
  });
}
