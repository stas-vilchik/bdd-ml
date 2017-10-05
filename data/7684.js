{
  for (var readableID in eventTypeTestConfig) {
    var nodeConfig = eventTypeTestConfig[readableID];
    var id = readableIDToID[readableID];
    var handler =
      nodeConfig.order === NA
        ? neverFire.bind(null, readableID, registrationName)
        : function(rID, config, e) {
            expect(
              rID + "->" + registrationName + " index:" + runs.dispatchCount++
            ).toBe(rID + "->" + registrationName + " index:" + config.order);

            if (config.assertEvent) {
              config.assertEvent(e);
            }

            return config.returnVal;
          }.bind(null, readableID, nodeConfig);
    putListener(getInstanceFromNode(id), registrationName, handler);
  }
}
