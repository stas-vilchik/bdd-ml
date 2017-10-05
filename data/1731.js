{
  if (path.node.name !== "helper") return;
  path.replaceWith(this.addHelper("interopRequireDefault"));
}
