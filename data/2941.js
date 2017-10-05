{
  if (map.has(key)) {
    return map.get(key);
  }

  const value = new defaultConstructor();
  map.set(key, value);
  return value;
}
