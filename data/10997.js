{
  el.wrapData = function(code) {
    return (
      "_b(" +
      code +
      ",'" +
      el.tag +
      "'," +
      dir.value +
      "," +
      (dir.modifiers && dir.modifiers.prop ? "true" : "false") +
      (dir.modifiers && dir.modifiers.sync ? ",true" : "") +
      ")"
    );
  };
}
