{
  let error;

  try {
    runtime.requireMock(__filename, "./test_root/NativeModule.node");
  } catch (e) {
    error = e;
  } finally {
    expect(error.message).toMatch(
      /NativeModule.node\: file too short|not a valid Win\d+ application/
    );
  }
}
