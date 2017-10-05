{
  updateJSON.apply(this, [
    path.join(app.config.reactPath, opts.file),
    opts.fields,
    newVersion
  ]);
}
