{
  const pass = this.utils === matcherUtils;
  const message = pass
    ? () => `expected this.utils to be defined in an extend call`
    : () => `expected this.utils not to be defined in an extend call`;
  return {
    message,
    pass
  };
}
