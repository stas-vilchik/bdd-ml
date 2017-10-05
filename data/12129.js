{
  if (el.tag === "input" || el.tag === "textarea") {
    genDefaultModel(el, dir.value, dir.modifiers);
  } else {
    genComponentModel(el, dir.value, dir.modifiers);
  }
}
