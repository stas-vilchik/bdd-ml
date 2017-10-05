{
  if (!root) {
    return;
  }

  isStaticKey = genStaticKeysCached(options.staticKeys || "");
  isPlatformReservedTag = options.isReservedTag || no;
  markStatic(root);
  markStaticRoots(root, false);
}
