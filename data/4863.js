{
  await setupDuplicates(hm);
  mockFs['/fruits/blueberry.js'] = ['/**', ' * @providesModule Blueberry', ' */'].join('\n');
  const e = mockEmitters['/fruits'];
  e.emit('all', 'change', 'blueberry.js', '/fruits', MOCK_STAT);
  const {
    moduleMap
  } = await waitForItToChange(hm);
  expect(moduleMap.getModule('Pear')).toBe('/fruits/pear.js');
  expect(moduleMap.getModule('Blueberry')).toBe('/fruits/blueberry.js');
}