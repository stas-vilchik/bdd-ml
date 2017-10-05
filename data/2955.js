{
  if (Array.isArray(element)) {
    flattened.push.apply(flattened, element);
  } else {
    flattened.push(element);
  }
}
