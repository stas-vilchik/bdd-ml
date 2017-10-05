{
  const doIt = expressMiddleware(compiler, option);

  const fun = function*(next) {
    const ctx = this;
    ctx.webpack = doIt;
    const req = this.req;
    const runNext = yield middleware(doIt, req, {
      end: content => {
        ctx.body = content;
      },
      setHeader: () => {
        ctx.set.apply(ctx, arguments);
      }
    });

    if (runNext) {
      yield* next;
    }
  };

  fun.fileSystem = doIt.fileSystem;
  return fun;
}
