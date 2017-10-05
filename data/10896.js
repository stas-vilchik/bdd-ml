{
  var lastState = this.renderStates[this.renderStates.length - 1];

  if (isUndef(lastState)) {
    return this.done();
  }

  switch (lastState.type) {
    case "Element":
      var children = lastState.children;
      var total = lastState.total;
      var rendered = lastState.rendered++;

      if (rendered < total) {
        this.renderNode(children[rendered], false, this);
      } else {
        this.renderStates.pop();
        this.write(lastState.endTag, this.next);
      }

      break;

    case "Component":
      this.renderStates.pop();
      this.activeInstance = lastState.prevActive;
      this.next();
      break;

    case "ComponentWithCache":
      this.renderStates.pop();
      var buffer = lastState.buffer;
      var bufferIndex = lastState.bufferIndex;
      var componentBuffer = lastState.componentBuffer;
      var key = lastState.key;
      var result = {
        html: buffer[bufferIndex],
        components: componentBuffer[bufferIndex]
      };
      this.cache.set(key, result);

      if (bufferIndex === 0) {
        this.write.caching = false;
      } else {
        buffer[bufferIndex - 1] += result.html;
        var prev = componentBuffer[bufferIndex - 1];
        result.components.forEach(function(c) {
          return prev.add(c);
        });
      }

      buffer.length = bufferIndex;
      componentBuffer.length = bufferIndex;
      this.next();
      break;
  }
}
