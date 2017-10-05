{
  class OneExt extends One {
    constructor() {
      var o = {};
      super(o);
      assert.equal("c1", o.r);
    }

    m() {
      return super.m();
    }

    get g() {
      return super.g;
    }

    set x(v) {
      super.x = v;
    }

    get x() {
      return super.x;
    }
  }

  this.Cconstr = OneExt;
}
