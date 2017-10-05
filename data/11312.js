{
  function RenderStream(render) {
    var this$1 = this;
    superclass.call(this);
    this.buffer = "";
    this.render = render;
    this.expectedSize = 0;
    this.write = createWriteFunction(
      function(text, next) {
        var n = this$1.expectedSize;
        this$1.buffer += text;

        if (this$1.buffer.length >= n) {
          this$1.next = next;
          this$1.pushBySize(n);
          return true;
        }

        return false;
      },
      function(err) {
        this$1.emit("error", err);
      }
    );

    this.end = function() {
      this$1.done = true;
      this$1.push(this$1.buffer);
    };
  }

  if (superclass) RenderStream.__proto__ = superclass;
  RenderStream.prototype = Object.create(superclass && superclass.prototype);
  RenderStream.prototype.constructor = RenderStream;

  RenderStream.prototype.pushBySize = function pushBySize(n) {
    var bufferToPush = this.buffer.substring(0, n);
    this.buffer = this.buffer.substring(n);
    this.push(bufferToPush);
  };

  RenderStream.prototype.tryRender = function tryRender() {
    try {
      this.render(this.write, this.end);
    } catch (e) {
      this.emit("error", e);
    }
  };

  RenderStream.prototype.tryNext = function tryNext() {
    try {
      this.next();
    } catch (e) {
      this.emit("error", e);
    }
  };

  RenderStream.prototype._read = function _read(n) {
    this.expectedSize = n;

    if (isTrue(this.done)) {
      this.push(null);
      return;
    }

    if (this.buffer.length >= n) {
      this.pushBySize(n);
      return;
    }

    if (isUndef(this.next)) {
      this.tryRender();
    } else {
      this.tryNext();
    }
  };

  return RenderStream;
}
