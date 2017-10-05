{
  return Object.keys(cases).every(key => cases[key](path));
}
