{
  return {
    print: (val, serialize) => `${prop} - ${serialize(val[prop])}`,
    test: val => val && val.hasOwnProperty(prop)
  };
}
