{
  return (
    "" +
    (i === 0 ? "---> " : repeat(" ", 5 + i * 2)) +
    (Array.isArray(vm)
      ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)"
      : formatComponentName(vm))
  );
}
