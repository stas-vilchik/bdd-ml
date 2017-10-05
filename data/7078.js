{
  return (
    (request.status >= 200 && request.status < 300) ||
    request.status === 304 ||
    request.status === 0
  );
}
