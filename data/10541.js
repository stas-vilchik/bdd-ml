{
  co(e)
    ? po(n)
      ? t.removeAttribute(e)
      : ((n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e),
        t.setAttribute(e, n))
    : so(e)
      ? t.setAttribute(e, po(n) || "false" === n ? "false" : "true")
      : lo(e)
        ? po(n) ? t.removeAttributeNS(uo, fo(e)) : t.setAttributeNS(uo, e, n)
        : po(n) ? t.removeAttribute(e) : t.setAttribute(e, n);
}
