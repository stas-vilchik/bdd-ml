{
  yield *
    babelHelpers.asyncGeneratorDelegate(
      babelHelpers.asyncIterator([1, 2, 3]),
      babelHelpers.asyncGenerator.await
    );
  yield *
    babelHelpers.asyncGeneratorDelegate(
      babelHelpers.asyncIterator(iterable),
      babelHelpers.asyncGenerator.await
    );
}
