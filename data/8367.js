{
  if (!root) {
    return;
  }

  isStaticKey = genStaticKeysCached(options.staticKeys || "");
  isPlatformReservedTag = options.isReservedTag || no;
  markStatic$1(root);
  markStaticRoots(root, false);
}
