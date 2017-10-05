{
  const big = {
    a: 1,
    b: {}
  };
  const small = {
    a: 1,
    b: {}
  };

  for (let i = 0; i < 10000; i += 1) {
    big.b[i] = "test";
  }

  for (let i = 0; i < 10; i += 1) {
    small.b[i] = "test";
  }

  expect(stringify(big)).toMatchSnapshot();
  expect(stringify(small)).toMatchSnapshot();
}
