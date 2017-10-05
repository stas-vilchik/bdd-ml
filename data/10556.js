{
  if (e && (e = e.trim()))
    if (t.classList)
      e.indexOf(" ") > -1
        ? e.split(/\s+/).forEach(function(e) {
            return t.classList.add(e);
          })
        : t.classList.add(e);
    else {
      var n = " " + (t.getAttribute("class") || "") + " ";
      n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim());
    }
}
