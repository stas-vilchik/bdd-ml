{
  callbacks.push(func);
  if (pending) return;
  pending = true;
  timerFunc(handle, 0);
}
