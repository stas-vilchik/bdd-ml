{
  return string.replace(regexEscape, function($0) {
    return escapeMap[$0];
  });
}
