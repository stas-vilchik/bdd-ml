{
  let _resolve;

  let _reject;

  let p = new Promise((resolve, reject) => {
    _resolve = resolve;
    _reject = reject;
  });

  p.resolve = (...args) => _resolve(...args);

  p.reject = (...args) => _reject(...args);

  return p;
}
