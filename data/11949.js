{
  (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
  lastFilterIndex = i + 1;
}
