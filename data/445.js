{
  done(
    new Error(
      "Should not succeed to make a HTTP Basic auth request with non-latin1 chars in credentials."
    )
  );
}
