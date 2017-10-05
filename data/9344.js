{
  return (
    void 0 === Ki &&
      (Ki =
        !Mi &&
        "undefined" != typeof global &&
        "server" === global.process.env.VUE_ENV),
    Ki
  );
}
