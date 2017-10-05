{
  writeFile(
    "core-js/" + path + ".js",
    defaultify(`require("core-js/library/fn/${path}")`)
  );
}
