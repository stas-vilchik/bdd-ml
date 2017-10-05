{
  return ch > 0x7f && search(start, ch, last + 1) == -1;
}
