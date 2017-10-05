{
  return "if(!('button' in $event)&&" + t.map(Ur).join("&&") + ")return null;";
}
