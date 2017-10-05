{
  return (
    event.relatedTarget ||
    (event.fromElement === event.srcElement
      ? event.toElement
      : event.fromElement)
  );
}
