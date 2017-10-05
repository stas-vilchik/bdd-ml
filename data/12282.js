{
  var name = vm._name;
  var id = vm._uid;
  var startTag = "vue-perf-start:" + id;
  var endTag = "vue-perf-end:" + id;
  mark(startTag);

  var vnode = vm._render();

  mark(endTag);
  measure(name + " render", startTag, endTag);
  mark(startTag);

  vm._update(vnode, hydrating);

  mark(endTag);
  measure(name + " patch", startTag, endTag);
}
