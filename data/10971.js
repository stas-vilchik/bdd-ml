{
  var exp = getBindingAttr(el, "key");

  if (exp) {
    if ("development" !== "production" && el.tag === "template") {
      warn$2(
        "<template> cannot be keyed. Place the key on real elements instead."
      );
    }

    el.key = exp;
  }
}
