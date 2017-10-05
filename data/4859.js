{
  const {
    moduleMap: initMM
  } = await hm.build();
  expect(initMM.getModule('Orange', 'ios')).toBeTruthy();
  expect(initMM.getModule('Orange', 'android')).toBeTruthy();
  const e = mockEmitters['/fruits'];
  e.emit('all', 'change', 'Orange.ios.js', '/fruits/', MOCK_STAT);
  e.emit('all', 'change', 'Orange.android.js', '/fruits/', MOCK_STAT);
  const {
    eventsQueue,
    hasteFS,
    moduleMap
  } = await waitForItToChange(hm);
  expect(eventsQueue).toHaveLength(2);
  expect(eventsQueue).toEqual([{
    filePath: '/fruits/Orange.ios.js',
    stat: MOCK_STAT,
    type: 'change'
  }, {
    filePath: '/fruits/Orange.android.js',
    stat: MOCK_STAT,
    type: 'change'
  }]);
  expect(hasteFS.getModuleName('/fruits/Orange.ios.js')).toBeTruthy();
  expect(hasteFS.getModuleName('/fruits/Orange.android.js')).toBeTruthy();
  const iosVariant = moduleMap.getModule('Orange', 'ios');
  expect(iosVariant).toBe('/fruits/Orange.ios.js');
  const androidVariant = moduleMap.getModule('Orange', 'android');
  expect(androidVariant).toBe('/fruits/Orange.android.js');
}