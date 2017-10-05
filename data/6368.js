{
  switch (bundleType) {
    case FB_DEV:
    case FB_PROD:
      return {
        "'react'": "'React'",
        "'react-dom'": "'ReactDOM'"
      };

    default:
      return {};
  }
}
