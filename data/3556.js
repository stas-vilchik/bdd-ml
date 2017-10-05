{
  res.end = function() {
    originalEnd.apply(this, arguments);
    done(null, 0);
  };

  doIt(req, res, () => done(null, 1));
}
