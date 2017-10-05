{
  return (
    void 0 === yr &&
      (yr =
        !ar &&
        "undefined" != typeof global &&
        "server" === global.process.env.VUE_ENV),
    yr
  );
}
