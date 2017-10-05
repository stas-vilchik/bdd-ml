{
  return !!(
    src.match(/^\s*negative:\s*$/m) && src.match(/^\s+phase:\s*early\s*$/m)
  );
}
