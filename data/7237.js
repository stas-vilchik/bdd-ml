{
  var factory = ReactElement.createElement.bind(null, type);
  factory.type = type;
  return factory;
}
