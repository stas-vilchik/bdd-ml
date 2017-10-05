{
  let i = 0;
  let acc = 0;

  for (let item of arr) {
    if (i >= length) return acc;
    acc += item;
    i++;
  }

  return acc;
}
