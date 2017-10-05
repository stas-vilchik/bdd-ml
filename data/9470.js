{
  var e = "";
  return (
    t.staticClass && (e += "staticClass:" + t.staticClass + ","),
    t.classBinding && (e += "class:" + t.classBinding + ","),
    e
  );
}
