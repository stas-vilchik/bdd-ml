{
  if (isOldIE && typeof Blob === "undefined") {
    return;
  }

  expect(utils.isBlob(new Blob())).toEqual(true);
}
