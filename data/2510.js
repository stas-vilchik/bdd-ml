{
  yCount++;
  return {
    get z() {
      zCount++;
      return undefined;
    }
  };
}
