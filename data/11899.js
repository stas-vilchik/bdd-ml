{
  if (!root) {
    return;
  }

  isPlatformReservedTag$1 = options.isReservedTag || no;
  walk(root, true);
}
