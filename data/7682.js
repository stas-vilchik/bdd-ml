{
  var runs = {
    dispatchCount: 0
  };

  var neverFire = function(readableID, registrationName) {
    runs.dispatchCount++;
    expect("").toBe(
      "Event type: " +
        registrationName +
        "\nShould never occur on:" +
        readableID +
        "\nFor event test config:\n" +
        JSON.stringify(eventTestConfig) +
        "\n"
    );
  };

  var registerOneEventType = function(registrationName, eventTypeTestConfig) {
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
  };

  for (var eventName in eventTestConfig) {
    var oneEventTypeTestConfig = eventTestConfig[eventName];
    var hasTwoPhase = !!oneEventTypeTestConfig.bubbled;

    if (hasTwoPhase) {
      registerOneEventType(
        ResponderEventPlugin.eventTypes[eventName].phasedRegistrationNames
          .bubbled,
        oneEventTypeTestConfig.bubbled
      );
      registerOneEventType(
        ResponderEventPlugin.eventTypes[eventName].phasedRegistrationNames
          .captured,
        oneEventTypeTestConfig.captured
      );
    } else {
      registerOneEventType(
        ResponderEventPlugin.eventTypes[eventName].registrationName,
        oneEventTypeTestConfig
      );
    }
  }

  return runs;
}
