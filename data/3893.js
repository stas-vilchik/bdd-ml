{
  const fn = arguments[0];

  const args = _.toArray(arguments).slice(1);

  return new Promise((resolve, reject) => {
    function callback(err, data) {
      if (err) {
        return reject(err);
      }

      return resolve(data);
    }

    args.push(callback);
    fn.apply(null, args);
  });
}
