{
  this.inner = {
    __proto__: p2,
    [super.n()]: 'inner',

    m() {
      super.m();
    }

  };
  super.m();
}