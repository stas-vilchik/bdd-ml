{
  if (isOldIE && typeof Int8Array === "undefined") {
    return;
  }

  var data = "Hello, world";
  expect(__btoa(data)).toEqual(window.btoa(data));
}
