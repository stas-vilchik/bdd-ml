{
  return (
    constructorTable.get(nativeConstructor.prototype) === wrapperConstructor
  );
}
