{
  if (!test.options[option]) return;
  if (!flowOptionsMapping[option])
    throw new Error("Parser options not mapped " + option);
  babylonOptions.plugins.push(flowOptionsMapping[option]);
}
