{
  if (typeof key === "string" && !(key in target)) {
    warnNonPresent(target, key);
  }

  return target[key];
}
