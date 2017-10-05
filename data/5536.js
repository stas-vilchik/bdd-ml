{
  const len = data.length;
  const arr = Array(len);

  for (let j = 0; j < len; j++) {
    arr[j] = data[(Math.random() * len) | 0];
  }

  return arr;
}
