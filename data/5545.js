{
  const now = new Date().getTime() / 1000;
  const minutes = (now - time) / 60;

  if (minutes < 60) {
    return Math.round(minutes) + " minutes ago";
  }

  return Math.round(minutes / 60) + " hours ago";
}
