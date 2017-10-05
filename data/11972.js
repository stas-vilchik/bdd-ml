{
  p.then(nextTickHandler).catch(logError);

  if (isIOS) {
    setTimeout(noop);
  }
}
