{
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal) ? childVal : [childVal]
    : parentVal;
}
