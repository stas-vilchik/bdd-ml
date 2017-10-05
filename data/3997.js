{
  fetchCurrentUser(user => {
    const loggedText = "Logged " + (user.loggedIn ? "In" : "Out");
    $("#username").text(user.fullName + " - " + loggedText);
  });
}
