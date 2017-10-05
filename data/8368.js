{
  return makeMap(
    "type,tag,attrsList,attrsMap,plain,parent,children,attrs" +
      (keys ? "," + keys : "")
  );
}
