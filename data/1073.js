{
  chai
    .expect(actualFiles, "Extraneous file in output: " + filename)
    .to.contain.key(filename);
}
