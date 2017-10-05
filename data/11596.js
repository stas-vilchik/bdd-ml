{
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
}
