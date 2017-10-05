{
  mockFs['/fruits/tomato.js'] = ['/**', ' * @providesModule Tomato', ' */'].join('\n');
  mockFs['/fruits/pear.js'] = ['/**', ' * @providesModule Kiwi', ' */'].join('\n');
  const e = mockEmitters['/fruits'];
  e.emit('all', 'add', 'tomato.js', '/fruits', MOCK_STAT);
  e.emit('all', 'change', 'pear.js', '/fruits', MOCK_STAT);
  const {
    eventsQueue,
    hasteFS,
    moduleMap
  } = await waitForItToChange(hm);
  expect(eventsQueue).toEqual([{
    filePath: '/fruits/tomato.js',
    stat: MOCK_STAT,
    type: 'add'
  }, {
    filePath: '/fruits/pear.js',
    stat: MOCK_STAT,
    type: 'change'
  }]);
  expect(hasteFS.getModuleName('/fruits/tomato.js')).not.toBeNull();
  expect(moduleMap.getModule('Tomato')).toBeDefined();
  expect(moduleMap.getModule('Pear')).toBeNull();
  expect(moduleMap.getModule('Kiwi')).toBe('/fruits/pear.js');
}