{
  visitor: {
    Identifier(path) {
      path.node.name = "LOL";
    }

  }
}