{
  return (
    argumentsArray.length === 1 &&
    argumentsArray[0].type === "Literal" &&
    argumentsArray[0].value === "undefined"
  );
}
