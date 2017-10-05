{
  try {
    return JSON.stringify(
      jsf({
        definitions,
        response
      }).response || {}
    );
  } catch (e) {
    return JSON.stringify({
      error: e.message
    });
  }
}
