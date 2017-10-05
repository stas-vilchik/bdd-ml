{
  let h = date.getHours();
  let m = date.getMinutes();
  m = m < 10 ? "0" + m : m;
  return h + ":" + m;
}
