{
  const { addSerializer, getSerializers } = require("../plugins");

  const prev = getSerializers();
  const added = names.map(name =>
    require(require.resolve(`./plugins/${name}`))
  );
  added
    .concat()
    .reverse()
    .forEach(serializer => addSerializer(serializer));
  const next = getSerializers();
  expect(next.length).toBe(added.length + prev.length);
  expect(next).toEqual(added.concat(prev));
}
