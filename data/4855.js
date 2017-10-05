{
  const initialResult = await hm.build();
  const filePath = '/fruits/banana.js';
  expect(initialResult.hasteFS.getModuleName(filePath)).toBeDefined();
  expect(initialResult.moduleMap.getModule('Banana')).toBe(filePath);
  mockDeleteFile('/fruits', 'banana.js');
  mockDeleteFile('/fruits', 'banana.js');
  const {
    eventsQueue,
    hasteFS,
    moduleMap
  } = await waitForItToChange(hm);
  expect(eventsQueue).toHaveLength(1);
  const deletedBanana = {
    filePath,
    stat: undefined,
    type: 'delete'
  };
  expect(eventsQueue).toEqual([deletedBanana]);
  expect(initialResult.hasteFS.getModuleName(filePath)).toBeDefined();
  expect(initialResult.moduleMap.getModule('Banana')).toBe(filePath);
  expect(hasteFS.getModuleName(filePath)).toBeNull();
  expect(moduleMap.getModule('Banana')).toBeNull();
}