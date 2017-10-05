{
  function TemplateStream(renderer, template, context) {
    Transform.call(this);
    this.started = false;
    this.renderer = renderer;
    this.template = template;
    this.context = context || {};
    this.inject = renderer.inject;
  }

  if (Transform) TemplateStream.__proto__ = Transform;
  TemplateStream.prototype = Object.create(Transform && Transform.prototype);
  TemplateStream.prototype.constructor = TemplateStream;

  TemplateStream.prototype._transform = function _transform(
    data,
    encoding,
    done
  ) {
    if (!this.started) {
      this.emit("beforeStart");
      this.start();
    }

    this.push(data);
    done();
  };

  TemplateStream.prototype.start = function start() {
    this.started = true;
    this.push(this.template.head(this.context));

    if (this.inject) {
      if (this.context.head) {
        this.push(this.context.head);
      }

      var links = this.renderer.renderResourceHints(this.context);

      if (links) {
        this.push(links);
      }

      var styles = this.renderer.renderStyles(this.context);

      if (styles) {
        this.push(styles);
      }
    }

    this.push(this.template.neck(this.context));
  };

  TemplateStream.prototype._flush = function _flush(done) {
    this.emit("beforeEnd");

    if (this.inject) {
      var state = this.renderer.renderState(this.context);

      if (state) {
        this.push(state);
      }

      var scripts = this.renderer.renderScripts(this.context);

      if (scripts) {
        this.push(scripts);
      }
    }

    this.push(this.template.tail(this.context));
    done();
  };

  return TemplateStream;
}
