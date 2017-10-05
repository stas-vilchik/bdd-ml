{
  if (spaceCharRe.test(id)) return null;
  return this.querySelector('[id="' + id + '"]');
}
