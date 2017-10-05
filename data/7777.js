{
  if (inst._hostParent !== undefined) {
    return inst._hostParent;
  }

  if (typeof inst.tag === "number") {
    do {
      inst = inst.return;
    } while (inst && inst.tag !== HostComponent);

    if (inst) {
      return inst;
    }
  }

  return null;
}
