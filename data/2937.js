{
  for (let i = starting; arr[i] <= ch && i < arr.length; last = i++)
    if (arr[i] === ch) return i;

  return -1;
}
