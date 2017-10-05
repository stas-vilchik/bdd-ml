{
  error.config = config;

  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  return error;
}
