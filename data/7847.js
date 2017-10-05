{
  buildEntry(builds[built])
    .then(() => {
      built++;

      if (built < total) {
        next();
      }
    })
    .catch(logError);
}
