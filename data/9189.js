{
  Ko(e)
    ? Go(n)
      ? t.removeAttribute(e)
      : ((n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e),
        t.setAttribute(e, n))
    : zo(e)
      ? t.setAttribute(e, Go(n) || "false" === n ? "false" : "true")
      : qo(e)
        ? Go(n) ? t.removeAttributeNS(Jo, Wo(e)) : t.setAttributeNS(Jo, e, n)
        : Go(n) ? t.removeAttribute(e) : t.setAttribute(e, n);
}
