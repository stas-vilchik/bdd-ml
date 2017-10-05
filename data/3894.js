{
  function callback(err, data) {
    if (err) {
      return reject(err);
    }

    return resolve(data);
  }

  args.push(callback);
  fn.apply(null, args);
}
