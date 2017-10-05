{
  el.ifProcessed = true;
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
}
