{
  if (callbackBookkeepingPool.length) {
    const instance = callbackBookkeepingPool.pop();
    instance.topLevelType = topLevelType;
    instance.nativeEvent = nativeEvent;
    instance.targetInst = targetInst;
    return instance;
  }

  return {
    topLevelType,
    nativeEvent,
    targetInst,
    ancestors: []
  };
}
