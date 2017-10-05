{
  if (!options || !options.relatedTarget) return options;
  return Object.create(options, {
    relatedTarget: {
      value: unwrap(options.relatedTarget)
    }
  });
}
