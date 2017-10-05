{
  fs.writeFileSync(
    relative(`src/core-js/modules/${polyfill}.js`),
    `require("core-js/modules/${polyfill}");`
  );
}
