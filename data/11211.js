{
  return (
    isAttr(name) || name.indexOf("data-") === 0 || name.indexOf("aria-") === 0
  );
}
