{
  xCount++;
  return {
    get y() {
      yCount++;
      return {
        get z() {
          zCount++;
          return undefined;
        }
      };
    }
  };
}
