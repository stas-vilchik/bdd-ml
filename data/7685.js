{
  expect(rID + "->" + registrationName + " index:" + runs.dispatchCount++).toBe(
    rID + "->" + registrationName + " index:" + config.order
  );

  if (config.assertEvent) {
    config.assertEvent(e);
  }

  return config.returnVal;
}
