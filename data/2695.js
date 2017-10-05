{
  return {
    iterable: this,

    next(v) {
      return {
        value: 42,
        done: false
      };
    },

    return(v) {
      this.iterable.closed = true;
      return {
        value: undefined,
        done: true
      };
    }
  };
}
