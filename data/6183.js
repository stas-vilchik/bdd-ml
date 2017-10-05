{
  const flags = require.requireActual("ReactFeatureFlags");

  return Object.assign({}, flags, {
    disableNewFiberFeatures: true
  });
}
