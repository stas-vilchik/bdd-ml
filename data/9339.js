{
  if (t.outerHTML) return t.outerHTML;
  var e = document.createElement("div");
  return e.appendChild(t.cloneNode(!0)), e.innerHTML;
}
