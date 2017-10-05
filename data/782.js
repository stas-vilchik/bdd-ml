{
  if (isOldIE && typeof FormData === "undefined") {
    return;
  }

  expect(utils.isFormData(new FormData())).toEqual(true);
}
