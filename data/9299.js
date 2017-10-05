{
  return (
    "style" === t.tag ||
    ("script" === t.tag &&
      (!t.attrsMap.type || "text/javascript" === t.attrsMap.type))
  );
}
