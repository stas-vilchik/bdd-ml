{
  var self = this,
    stack = [0],
    vstack = [null],
    lstack = [],
    table = this.table,
    yytext = "",
    yylineno = 0,
    yyleng = 0,
    recovering = 0,
    TERROR = 2,
    EOF = 1;
  this.lexer.setInput(input);
  this.lexer.yy = this.yy;
  this.yy.lexer = this.lexer;
  if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
  var yyloc = this.lexer.yylloc;
  lstack.push(yyloc);
  if (typeof this.yy.parseError === "function")
    this.parseError = this.yy.parseError;

  function popStack(n) {
    stack.length = stack.length - 2 * n;
    vstack.length = vstack.length - n;
    lstack.length = lstack.length - n;
  }

  function lex() {
    var token;
    token = self.lexer.lex() || 1;

    if (typeof token !== "number") {
      token = self.symbols_[token] || token;
    }

    return token;
  }

  var symbol,
    preErrorSymbol,
    state,
    action,
    a,
    r,
    yyval = {},
    p,
    len,
    newState,
    expected;

  while (true) {
    state = stack[stack.length - 1];

    if (this.defaultActions[state]) {
      action = this.defaultActions[state];
    } else {
      if (symbol == null) symbol = lex();
      action = table[state] && table[state][symbol];
    }

    _handle_error: if (
      typeof action === "undefined" ||
      !action.length ||
      !action[0]
    ) {
      if (!recovering) {
        expected = [];

        for (p in table[state])
          if (this.terminals_[p] && p > 2) {
            expected.push("'" + this.terminals_[p] + "'");
          }

        var errStr = "";

        if (this.lexer.showPosition) {
          errStr =
            "Parse error on line " +
            (yylineno + 1) +
            ":\n" +
            this.lexer.showPosition() +
            "\nExpecting " +
            expected.join(", ") +
            ", got '" +
            this.terminals_[symbol] +
            "'";
        } else {
          errStr =
            "Parse error on line " +
            (yylineno + 1) +
            ": Unexpected " +
            (symbol == 1
              ? "end of input"
              : "'" + (this.terminals_[symbol] || symbol) + "'");
        }

        this.parseError(errStr, {
          text: this.lexer.match,
          token: this.terminals_[symbol] || symbol,
          line: this.lexer.yylineno,
          loc: yyloc,
          expected: expected
        });
      }

      if (recovering == 3) {
        if (symbol == EOF) {
          throw new Error(errStr || "Parsing halted.");
        }

        yyleng = this.lexer.yyleng;
        yytext = this.lexer.yytext;
        yylineno = this.lexer.yylineno;
        yyloc = this.lexer.yylloc;
        symbol = lex();
      }

      while (1) {
        if (TERROR.toString() in table[state]) {
          break;
        }

        if (state == 0) {
          throw new Error(errStr || "Parsing halted.");
        }

        popStack(1);
        state = stack[stack.length - 1];
      }

      preErrorSymbol = symbol;
      symbol = TERROR;
      state = stack[stack.length - 1];
      action = table[state] && table[state][TERROR];
      recovering = 3;
    }

    if (action[0] instanceof Array && action.length > 1) {
      throw new Error(
        "Parse Error: multiple actions possible at state: " +
          state +
          ", token: " +
          symbol
      );
    }

    switch (action[0]) {
      case 1:
        stack.push(symbol);
        vstack.push(this.lexer.yytext);
        lstack.push(this.lexer.yylloc);
        stack.push(action[1]);
        symbol = null;

        if (!preErrorSymbol) {
          yyleng = this.lexer.yyleng;
          yytext = this.lexer.yytext;
          yylineno = this.lexer.yylineno;
          yyloc = this.lexer.yylloc;
          if (recovering > 0) recovering--;
        } else {
          symbol = preErrorSymbol;
          preErrorSymbol = null;
        }

        break;

      case 2:
        len = this.productions_[action[1]][1];
        yyval.$ = vstack[vstack.length - len];
        yyval._$ = {
          first_line: lstack[lstack.length - (len || 1)].first_line,
          last_line: lstack[lstack.length - 1].last_line,
          first_column: lstack[lstack.length - (len || 1)].first_column,
          last_column: lstack[lstack.length - 1].last_column
        };
        r = this.performAction.call(
          yyval,
          yytext,
          yyleng,
          yylineno,
          this.yy,
          action[1],
          vstack,
          lstack
        );

        if (typeof r !== "undefined") {
          return r;
        }

        if (len) {
          stack = stack.slice(0, -1 * len * 2);
          vstack = vstack.slice(0, -1 * len);
          lstack = lstack.slice(0, -1 * len);
        }

        stack.push(this.productions_[action[1]][0]);
        vstack.push(yyval.$);
        lstack.push(yyval._$);
        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
        stack.push(newState);
        break;

      case 3:
        return true;
    }
  }

  return true;
}
