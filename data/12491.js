{
  var children = this.prevChildren;
  var moveClass = this.moveClass || (this.name || "v") + "-move";
  var moveData =
    children.length && this.getMoveData(children[0].context, moveClass);

  if (!moveData) {
    return;
  }
}
