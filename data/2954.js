{
  const flattened = [];
  array.forEach(function(element) {
    if (Array.isArray(element)) {
      flattened.push.apply(flattened, element);
    } else {
      flattened.push(element);
    }
  });
  return flattened;
}
