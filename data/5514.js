{
  for (var key in require.cache) {
    delete require.cache[key];
  }

  const render = require("./render").default;

  res.send(render(req.url));
}
