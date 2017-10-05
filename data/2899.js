{
  if (request === "babel-core") {
    request = __dirname + "/../../babel-core";
  }

  return originalLoader(request, parent, isMain);
}
