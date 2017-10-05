{
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
}
