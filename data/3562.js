{
  const nextStep = yield middleware(action, this.req, this.res);

  if (nextStep && next) {
    yield* next;
  }
}