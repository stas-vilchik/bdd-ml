{
  if (root) {
    Array.prototype.forEach.call(root.querySelectorAll("*"), function(node) {
      node.setAttribute(name, "");
    });
    Array.prototype.forEach.call(
      root.querySelectorAll("template"),
      function(template) {
        this.applyScopeToContent(template.content, name);
      },
      this
    );
  }
}
