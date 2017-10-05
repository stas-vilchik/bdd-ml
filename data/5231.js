{
  const util = require.requireActual("jest-util");

  util.createDirectory = jest.fn();
  return util;
}
