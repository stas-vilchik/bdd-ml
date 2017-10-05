{
  [
    anything().asymmetricMatch("jest"),
    anything().asymmetricMatch(1),
    anything().asymmetricMatch(() => {}),
    anything().asymmetricMatch(true),
    anything().asymmetricMatch({}),
    anything().asymmetricMatch([])
  ].forEach(test => {
    jestExpect(test).toBe(true);
  });
}
