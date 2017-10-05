{
  return {
    name: !!this.newUser.name.trim(),
    email: emailRE.test(this.newUser.email)
  };
}
