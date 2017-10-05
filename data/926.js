{
  watch(
    sources.map(getGlobFromSource),
    {
      debounceDelay: 200
    },
    function() {
      gulp.start("build");
    }
  );
}
