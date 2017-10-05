{
  for (var i = 0; i < searchLength; i++)
    if (!this.equals(current[i], old[i])) return i;

  return searchLength;
}
