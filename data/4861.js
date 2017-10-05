{
  mockFs['/fruits/pear.js'] = ['/**', ' * @providesModule Pear', ' */'].join('\n');
  mockFs['/fruits/blueberry.js'] = ['/**', ' * @providesModule Pear', ' */'].join('\n');
  const e = mockEmitters['/fruits'];
  e.emit('all', 'change', 'pear.js', '/fruits', MOCK_STAT);
  e.emit('all', 'add', 'blueberry.js', '/fruits', MOCK_STAT);
  const {
    hasteFS,
    moduleMap
  } = await waitForItToChange(hm);
  expect(hasteFS.exists('/fruits/blueberry.js')).toBe(true);

  try {
    moduleMap.getModule('Pear');
    throw new Error('should be unreachable');
  } catch (error) {
    const {
      DuplicateHasteCandidatesError
    } = require('../module_map').default;

    expect(error).toBeInstanceOf(DuplicateHasteCandidatesError);
    expect(error.hasteName).toBe('Pear');
    expect(error.platform).toBe('g');
    expect(error.supportsNativePlatform).toBe(false);
    expect(error.duplicatesSet).toEqual({
      '/fruits/blueberry.js': 0,
      '/fruits/pear.js': 0
    });
    expect(error.message).toMatchSnapshot();
  }
}