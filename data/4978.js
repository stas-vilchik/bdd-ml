{
  const obj = {
    func: () => "some text"
  };
  moduleMocker.spyOn(obj, "func").mockReturnValue(undefined);
  expect(obj.func()).not.toEqual("some text");
}
