{
  const Thing = function() {};

  [
    any(String).asymmetricMatch("jest"),
    any(Number).asymmetricMatch(1),
    any(Function).asymmetricMatch(() => {}),
    any(Boolean).asymmetricMatch(true),
    any(Object).asymmetricMatch({}),
    any(Array).asymmetricMatch([]),
    any(Thing).asymmetricMatch(new Thing())
  ].forEach(test => {
    jestExpect(test).toBe(true);
  });
}
