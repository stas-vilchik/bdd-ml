{
  if (isOldIE && typeof ArrayBuffer === "undefined") {
    return;
  }

  expect(utils.isArrayBufferView(new DataView(new ArrayBuffer(2)))).toEqual(
    true
  );
}
