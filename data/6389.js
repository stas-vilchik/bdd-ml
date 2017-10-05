{
  return babel.transform(input, {
    plugins: [wrapWarningWithEnvCheck]
  }).code;
}
