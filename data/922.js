{
  return merge(
    sources.map(source => {
      const base = path.join(__dirname, source);
      return gulp
        .src(getGlobFromSource(source), {
          base: base
        })
        .pipe(
          plumber({
            errorHandler: function(err) {
              gutil.log(err.stack);
            }
          })
        )
        .pipe(
          newer({
            dest: base,
            map: swapSrcWithLib
          })
        )
        .pipe(
          through.obj(function(file, enc, callback) {
            gutil.log("Compiling", "'" + chalk.cyan(file.relative) + "'...");
            callback(null, file);
          })
        )
        .pipe(babel())
        .pipe(
          through.obj(function(file, enc, callback) {
            file.path = path.resolve(file.base, swapSrcWithLib(file.relative));
            callback(null, file);
          })
        )
        .pipe(gulp.dest(base));
    })
  );
}
