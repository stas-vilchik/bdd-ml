{
  if (this.isValid) {
    usersRef.push(this.newUser);
    this.newUser.name = "";
    this.newUser.email = "";
  }
}
