{
  if (!e.target.composing) {
    return;
  }

  e.target.composing = false;
  trigger(e.target, "input");
}
