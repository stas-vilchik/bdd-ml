{
  await setupDuplicates(hm);
  mockFs['/fruits/pear.js'] = ['/**', ' * @providesModule OldPear', ' */'].join('\n');
  const e = mockEmitters['/fruits'];
  e.emit('all', 'change', 'pear.js', '/fruits', MOCK_STAT);
  const {
    moduleMap
  } = await waitForItToChange(hm);
  expect(moduleMap.getModule('Pear')).toBe('/fruits/blueberry.js');
  expect(moduleMap.getModule('OldPear')).toBe('/fruits/pear.js');
  expect(moduleMap.getModule('Blueberry')).toBe(null);
}