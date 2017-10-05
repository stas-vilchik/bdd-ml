{
  if (!warned[msg]) {
    warned[msg] = true;
    console.warn("\n\u001b[31m" + msg + "\u001b[39m\n");
  }
}
