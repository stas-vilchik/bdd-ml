{
  axios("/foo", {
    auth: {
      username: "Aladßç£☃din",
      password: "open sesame"
    }
  })
    .then(function(response) {
      done(
        new Error(
          "Should not succeed to make a HTTP Basic auth request with non-latin1 chars in credentials."
        )
      );
    })
    .catch(function(error) {
      validateInvalidCharacterError(error);
      done();
    });
}
