{
  const e = mockEmitters['/fruits'];
  e.emit('all', 'change', 'tomato.js', '/fruits', MOCK_STAT);
  e.emit('all', 'change', 'tomato.js', '/fruits', MOCK_STAT);
  const {
    eventsQueue
  } = await waitForItToChange(hm);
  expect(eventsQueue).toHaveLength(1);
}