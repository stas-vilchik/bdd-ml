{
  if (e && (e = e.trim()))
    if (t.classList)
      e.indexOf(" ") > -1
        ? e.split(/\s+/).forEach(function(e) {
            return t.classList.remove(e);
          })
        : t.classList.remove(e),
        t.classList.length || t.removeAttribute("class");
    else {
      for (
        var n = " " + (t.getAttribute("class") || "") + " ", r = " " + e + " ";
        n.indexOf(r) >= 0;

      )
        n = n.replace(r, " ");

      (n = n.trim()) ? t.setAttribute("class", n) : t.removeAttribute("class");
    }
}
