{
  try {
    return callback(detail);
  } catch (e) {
    lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
    return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
  }
}
