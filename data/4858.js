{
  const e = mockEmitters['/fruits'];
  e.emit('all', 'add', 'apple.js', '/fruits/node_modules/', MOCK_STAT);
  const {
    eventsQueue,
    hasteFS
  } = await waitForItToChange(hm);
  const filePath = '/fruits/node_modules/apple.js';
  expect(eventsQueue).toHaveLength(1);
  expect(eventsQueue).toEqual([{
    filePath,
    stat: MOCK_STAT,
    type: 'add'
  }]);
  expect(hasteFS.getModuleName(filePath)).toBeDefined();
}