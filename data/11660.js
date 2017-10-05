{
  if (options === void 0) options = {};
  return createRenderer$1(
    Object.assign({}, options, {
      isUnaryTag: isUnaryTag,
      canBeLeftOpenTag: canBeLeftOpenTag,
      modules: modules,
      directives: Object.assign(baseDirectives, options.directives)
    })
  );
}
