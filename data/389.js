{
  try {
    return promise.then;
  } catch (error) {
    lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
    return lib$es6$promise$$internal$$GET_THEN_ERROR;
  }
}
