{
  var n = document.createElement(t);
  return "select" !== t
    ? n
    : (e.data &&
        e.data.attrs &&
        void 0 !== e.data.attrs.multiple &&
        n.setAttribute("multiple", "multiple"),
      n);
}
