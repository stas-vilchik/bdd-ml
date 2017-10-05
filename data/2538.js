{
  assert(ex instanceof Error);
  assert(ex.toString().indexOf(message) !== -1);
  done();
}
