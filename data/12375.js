{
  if (process.env.NODE_ENV !== "production" && !(this instanceof Vue$2)) {
    warn("Vue is a constructor and should be called with the `new` keyword");
  }

  this._init(options);
}
