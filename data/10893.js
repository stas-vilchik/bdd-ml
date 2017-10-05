{
  if (text && cachedWrite.caching) {
    cachedWrite.cacheBuffer[cachedWrite.cacheBuffer.length - 1] += text;
  }

  var waitForNext = write(text, next);

  if (waitForNext !== true) {
    if (stackDepth >= MAX_STACK_DEPTH) {
      process.nextTick(function() {
        try {
          next();
        } catch (e) {
          onError(e);
        }
      });
    } else {
      stackDepth++;
      next();
      stackDepth--;
    }
  }
}
