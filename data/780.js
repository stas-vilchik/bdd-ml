{
  if (isOldIE && typeof ArrayBuffer === "undefined") {
    return;
  }

  expect(utils.isArrayBuffer(new ArrayBuffer(2))).toEqual(true);
  expect(utils.isArrayBuffer({})).toEqual(false);
}
