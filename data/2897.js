{
  pump(
    [
      gulp.src(path + "/src/index.js"),
      webpackBuild(name + ".js", exportName, version),
      gulp.dest(path),
      uglify(),
      rename({
        extname: ".min.js"
      }),
      gulp.dest(path)
    ],
    cb
  );
}
