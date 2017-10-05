{
  if (token.reason) {
    return;
  }

  token.reason = new Cancel(message);
  resolvePromise(token.reason);
}
