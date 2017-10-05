{
  return (
    "if(!('button' in $event)&&" +
    keys.map(genFilterCode).join("&&") +
    ")return null;"
  );
}
