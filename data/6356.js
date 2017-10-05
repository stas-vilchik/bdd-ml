{
  if (
    o[prop] !== null &&
    (typeof o[prop] === "object" || typeof o[prop] === "function") &&
    !Object.isFrozen(o[prop])
  ) {
    deepFreeze(o[prop]);
  }
}
