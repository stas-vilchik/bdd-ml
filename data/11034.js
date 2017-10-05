{
  var name = ref.name;
  var value = ref.value;
  name = propsToAttrMap[name] || name.toLowerCase();

  if (
    isRenderableAttr(name) &&
    !(
      attrs &&
      attrs.some(function(a) {
        return a.name === name;
      })
    )
  ) {
    segments.push(genAttrSegment(name, value));
  }
}
