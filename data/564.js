{
  var err;
  var data = "I ♡ Unicode!";

  try {
    __btoa(data);
  } catch (e) {
    err = e;
  }

  validateInvalidCharacterError(err);
}
