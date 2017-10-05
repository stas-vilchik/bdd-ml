{
  if (!root) {
    return;
  }

  isPlatformReservedTag = options.isReservedTag || no;
  walk(root, true);
}
