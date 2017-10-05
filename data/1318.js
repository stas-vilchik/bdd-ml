{
  return obj &&
    typeof Symbol === "function" &&
    obj.constructor === Symbol &&
    obj !== Symbol.prototype
    ? "symbol"
    : typeof obj;
}
