{
  if (str.match(/^v\-/)) {
    return str.replace(/(v-[a-z\-]+\:)([a-z\-]+)$/i, function(
      $,
      directive,
      prop
    ) {
      return directive + normalize$1(prop);
    });
  }

  return normalize$1(str);
}
