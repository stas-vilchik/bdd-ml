{
  if (!element) {
    return null;
  }

  return EventListener.capture(
    element,
    handlerBaseName,
    ReactDOMEventListener.dispatchEvent.bind(null, topLevelType)
  );
}
