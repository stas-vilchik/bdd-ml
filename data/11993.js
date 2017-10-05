{
  if (process.env.NODE_ENV !== "production") {
    if (el.tag === "slot" || el.tag === "template") {
      warnOnce(
        "Cannot use <" +
          el.tag +
          "> as component root element because it may " +
          "contain multiple nodes."
      );
    }

    if (el.attrsMap.hasOwnProperty("v-for")) {
      warnOnce(
        "Cannot use v-for on stateful component root element because " +
          "it renders multiple elements."
      );
    }
  }
}
