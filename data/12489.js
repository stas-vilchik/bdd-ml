{
  c.data.transition = transitionData;

  if (map[c.key]) {
    kept.push(c);
  } else {
    removed.push(c);
  }
}
