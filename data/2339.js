{
  if (ttl === 0) {
    return {
      done: true,
      value: null
    };
  } else {
    return {
      done: false,
      value: ttl--
    };
  }
}
