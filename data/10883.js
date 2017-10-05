{
  var classList = genClassForVnode(node);

  if (classList !== "") {
    return ' class="' + escape(classList) + '"';
  }
}
