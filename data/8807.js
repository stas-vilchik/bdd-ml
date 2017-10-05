{
  return (
    !elm.composing &&
    (vnode.tag === "option" ||
      isDirty(elm, checkVal) ||
      isInputChanged(elm, checkVal))
  );
}
