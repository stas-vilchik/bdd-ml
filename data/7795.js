{
  beforeEach(() => {
    jest.resetModules();
    reactProdInvariant = require("reactProdInvariant");
  });
  it("should throw with the correct number of `%s`s in the URL", () => {
    expect(function() {
      reactProdInvariant(124, "foo", "bar");
    }).toThrowError(
      "Minified React error #124; visit " +
        "http://facebook.github.io/react/docs/error-decoder.html?invariant=124&args[]=foo&args[]=bar" +
        " for the full message or use the non-minified dev environment" +
        " for full errors and additional helpful warnings."
    );
    expect(function() {
      reactProdInvariant(20);
    }).toThrowError(
      "Minified React error #20; visit " +
        "http://facebook.github.io/react/docs/error-decoder.html?invariant=20" +
        " for the full message or use the non-minified dev environment" +
        " for full errors and additional helpful warnings."
    );
    expect(function() {
      reactProdInvariant(77, "<div>", "&?bar");
    }).toThrowError(
      "Minified React error #77; visit " +
        "http://facebook.github.io/react/docs/error-decoder.html?invariant=77&args[]=%3Cdiv%3E&args[]=%26%3Fbar" +
        " for the full message or use the non-minified dev environment" +
        " for full errors and additional helpful warnings."
    );
  });
}
