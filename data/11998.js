{
  var l = el.attrsList.length;

  if (l) {
    var attrs = (el.attrs = new Array(l));

    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    el.plain = true;
  }
}
