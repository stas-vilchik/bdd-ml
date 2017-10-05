{
  var start = html.match(startTagOpen);

  if (start) {
    var match = {
      tagName: start[1],
      attrs: [],
      start: index
    };
    advance(start[0].length);
    var end, attr;

    while (
      !(end = html.match(startTagClose)) &&
      (attr = html.match(attribute))
    ) {
      advance(attr[0].length);
      match.attrs.push(attr);
    }

    if (end) {
      match.unarySlash = end[1];
      advance(end[0].length);
      match.end = index;
      return match;
    }
  }
}
