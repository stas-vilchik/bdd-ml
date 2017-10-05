{
  return new Promise(_resolve => rimraf("remote-repo", _resolve));
}
