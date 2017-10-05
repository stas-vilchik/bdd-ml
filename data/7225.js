{
  throw new Error(
    "You tried to use polymer without loading it first. To " +
      'load polymer, <link rel="import" href="' +
      'components/polymer/polymer.html">'
  );
}
