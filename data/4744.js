{
  var $0 = $$.length - 1;

  switch (yystate) {
    case 1:
      this.$ = yytext
        .replace(/\\(\\|")/g, "$" + "1")
        .replace(/\\n/g, "\n")
        .replace(/\\r/g, "\r")
        .replace(/\\t/g, "\t")
        .replace(/\\v/g, "\v")
        .replace(/\\f/g, "\f")
        .replace(/\\b/g, "\b");
      break;

    case 2:
      this.$ = Number(yytext);
      break;

    case 3:
      this.$ = null;
      break;

    case 4:
      this.$ = true;
      break;

    case 5:
      this.$ = false;
      break;

    case 6:
      return (this.$ = $$[$0 - 1]);
      break;

    case 13:
      this.$ = {};
      break;

    case 14:
      this.$ = $$[$0 - 1];
      break;

    case 15:
      this.$ = [$$[$0 - 2], $$[$0]];
      break;

    case 16:
      this.$ = {};
      this.$[$$[$0][0]] = $$[$0][1];
      break;

    case 17:
      this.$ = $$[$0 - 2];
      $$[$0 - 2][$$[$0][0]] = $$[$0][1];
      break;

    case 18:
      this.$ = [];
      break;

    case 19:
      this.$ = $$[$0 - 1];
      break;

    case 20:
      this.$ = [$$[$0]];
      break;

    case 21:
      this.$ = $$[$0 - 2];
      $$[$0 - 2].push($$[$0]);
      break;
  }
}
