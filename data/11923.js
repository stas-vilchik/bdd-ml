{
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}
