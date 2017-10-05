{
  this._input = input;
  this._more = this._less = this.done = false;
  this.yylineno = this.yyleng = 0;
  this.yytext = this.matched = this.match = "";
  this.conditionStack = ["INITIAL"];
  this.yylloc = {
    first_line: 1,
    first_column: 0,
    last_line: 1,
    last_column: 0
  };
  return this;
}
