{
  if (!opts.inFiles.hasOwnProperty(filename)) {
    const expect = opts.outFiles[filename];
    const actual = actualFiles[filename];
    chai.expect(expect, "Output is missing: " + filename).to.not.be.undefined;

    if (expect) {
      chai
        .expect(actual)
        .to.equal(expect, "Compiled output does not match: " + filename);
    }
  }
}
