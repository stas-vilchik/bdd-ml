{
  t.wrapData = function(n) {
    return (
      "_b(" +
      n +
      ",'" +
      t.tag +
      "'," +
      e.value +
      "," +
      (e.modifiers && e.modifiers.prop ? "true" : "false") +
      (e.modifiers && e.modifiers.sync ? ",true" : "") +
      ")"
    );
  };
}
