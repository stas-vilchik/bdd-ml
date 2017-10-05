{
  value = value && value.split(" ")[0];
  return value && value[0] === cmd && value.substring(1);
}
