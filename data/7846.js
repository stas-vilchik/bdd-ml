{
  let built = 0;
  const total = builds.length;

  const next = () => {
    buildEntry(builds[built])
      .then(() => {
        built++;

        if (built < total) {
          next();
        }
      })
      .catch(logError);
  };

  next();
}
