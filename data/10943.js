{
  if (useNamedReferences && has(encodeMap, symbol)) {
    return "&" + encodeMap[symbol] + ";";
  }

  return escapeBmpSymbol(symbol);
}
