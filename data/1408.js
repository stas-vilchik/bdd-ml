{
  function func2() {}

  function func3() {}

  func4(function() {
    func2();
  });
  return "break";
}
