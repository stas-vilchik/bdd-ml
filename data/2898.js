{
  const originalLoader = Module._load.bind(Module);

  Module._load = function babelStandaloneLoader(request, parent, isMain) {
    if (request === "babel-core") {
      request = __dirname + "/../../babel-core";
    }

    return originalLoader(request, parent, isMain);
  };
}
