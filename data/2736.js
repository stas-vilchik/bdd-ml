{
  return {
    iterable: this,

    next(v) {
      throw "ex";
    },

    throw(e) {
      throw e;
    },

    return(v) {
      this.iterable.returnCalled = true;
    }
  };
}
