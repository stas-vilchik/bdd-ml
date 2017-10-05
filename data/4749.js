{
  if (this.yy.parseError) {
    this.yy.parseError(str, hash);
  } else {
    throw new Error(str);
  }
}
