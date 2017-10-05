{
  if (typeof fun === "function") return true;
  return fun && fun.handleEvent;
}
