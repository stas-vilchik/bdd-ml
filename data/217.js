{
  return (
    this.handlers.push({
      fulfilled: e,
      rejected: t
    }),
    this.handlers.length - 1
  );
}
