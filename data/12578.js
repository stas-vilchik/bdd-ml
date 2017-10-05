{
  config.set(
    Object.assign(base, {
      browsers: ["ChromeHeadless"],
      reporters: ["progress"],
      plugins: base.plugins.concat(["karma-chrome-launcher"])
    })
  );
}
