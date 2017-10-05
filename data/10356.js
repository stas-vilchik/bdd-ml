{
  if (config.devtools) {
    if (devtools) {
      devtools.emit("init", Vue$3);
    } else if ("development" !== "production" && isChrome) {
      console[console.info ? "info" : "log"](
        "Download the Vue Devtools extension for a better development experience:\n" +
          "https://github.com/vuejs/vue-devtools"
      );
    }
  }

  if (
    "development" !== "production" &&
    config.productionTip !== false &&
    inBrowser &&
    typeof console !== "undefined"
  ) {
    console[console.info ? "info" : "log"](
      "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}
