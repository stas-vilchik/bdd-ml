{
  g = W(G2)();
  closeMethod(g);

  for (var i = 0; i < 8; i++) {
    assertThrownEquals(44, () => g.throw(44));
  }
}
