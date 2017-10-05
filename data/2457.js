{
  class Koala extends Animal {
    constructor(n) {
      super(n);
      this.n2 = n + ' Koala';
    }

    get n() {
      return this.n2;
    }

    get sn() {
      return super.n;
    }

    get fn() {
      return this.n + ' aka ' + this.sn;
    }

  }

  super(n);
  this.a = new Koala(n + ' II');
  this.n2 = n + ' Roo';
}