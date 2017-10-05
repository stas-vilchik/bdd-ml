{
  if (!element) {
    return null;
  }

  return EventListener.listen(
    element,
    handlerBaseName,
    ReactDOMEventListener.dispatchEvent.bind(null, topLevelType)
  );
}
