{
  for (var node = unwrap(target); node; node = node.parentNode) {
    if (hasListener(wrap(node), type)) return true;
  }

  return false;
}
