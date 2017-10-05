{
  runtime.setMock(
    __filename,
    "./test_root/mapped_dir/moduleInMapped",
    () => "mocked_in_mapped"
  );
  const parentDep = runtime.requireModule(
    runtime.__mockRootPath,
    "./dep_on_mapped_module.js"
  );
  expect(parentDep).toEqual({
    result: "mocked_in_mapped"
  });
}
