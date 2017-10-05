{
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
}