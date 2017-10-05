{
  fns.push(function() {
    return i;
  });

  if (i === 1) {
    return "continue";
  } else if (i === 2) {
    return "break";
  } else if (i === 3) {
    return {
      v: i
    };
  }
}
