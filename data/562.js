{
  it("should behave the same as native window.btoa", function() {
    if (isOldIE && typeof Int8Array === "undefined") {
      return;
    }

    var data = "Hello, world";
    expect(__btoa(data)).toEqual(window.btoa(data));
  });
  it("should throw an error if char is out of range 0xFF", function() {
    var err;
    var data = "I ♡ Unicode!";

    try {
      __btoa(data);
    } catch (e) {
      err = e;
    }

    validateInvalidCharacterError(err);
  });
}
