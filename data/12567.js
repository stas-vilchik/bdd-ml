{
  asserted = [];
  spyOn(console, "warn");
  spyOn(console, "error");
  jasmine.addMatchers({
    toHaveBeenWarned: () => createCompareFn(console.error),
    toHaveBeenTipped: () => createCompareFn(console.warn)
  });
}
