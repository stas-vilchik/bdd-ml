{
  s += "a";

  while (i++ < 3) {
    s += "b";

    label1: {
      s += "c";
      break label1;
      s += "d";
    }

    s += "e";
  }

  s += "f";
}
