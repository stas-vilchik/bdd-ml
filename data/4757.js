{
  var pre = this.pastInput();
  var c = new Array(pre.length + 1).join("-");
  return pre + this.upcomingInput() + "\n" + c + "^";
}
