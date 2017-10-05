{
  var e = "";
  return (
    t.staticStyle && (e += "staticStyle:" + t.staticStyle + ","),
    t.styleBinding && (e += "style:(" + t.styleBinding + "),"),
    e
  );
}
