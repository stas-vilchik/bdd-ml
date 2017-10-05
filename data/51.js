{
  if (typeof data === "string") {
    try {
      data = JSON.parse(data);
    } catch (e) {}
  }

  return data;
}
