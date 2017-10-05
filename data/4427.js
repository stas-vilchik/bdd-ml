{
  const pass = actual % expected === 0;
  const message = pass
    ? () => `expected ${actual} not to be divisible by ${expected}`
    : () => `expected ${actual} to be divisible by ${expected}`;
  return {
    message,
    pass
  };
}
