{
  const action = webpackHotMiddleware(compiler, option);
  return function*(next) {
    const nextStep = yield middleware(action, this.req, this.res);

    if (nextStep && next) {
      yield* next;
    }
  };
}
