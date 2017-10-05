{
  return (
    2 !== t.type &&
    (3 === t.type ||
      !(
        !t.pre &&
        (t.hasBindings ||
          t.if ||
          t.for ||
          mi(t.tag) ||
          !ms(t.tag) ||
          Fr(t) ||
          !Object.keys(t).every(hs))
      ))
  );
}
